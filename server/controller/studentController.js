const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const keys = require('../config/key')
const sendEmail = require('../utils/nodemailer')
const Student = require('../models/student')
const Subject = require('../models/subject')
const Attendence = require('../models/attendence')
const Mark = require("../models/marks")
const Notice = require("../models/notice")

//File Handler
const bufferConversion = require('../utils/bufferConversion')
const cloudinary = require('../utils/cloudinary')

const validateStudentLoginInput = require('../validation/studentLogin')
const validateStudentUpdatePassword = require('../validation/studentUpdatePassword')
const validateForgotPassword = require('../validation/forgotPassword')
const validateOTP = require('../validation/otpValidation')

module.exports = {
    studentLogin: async (req, res, next) => {
        const { errors, isValid } = validateStudentLoginInput(req.body);

        // Check Validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const { registrationNumber, password } = req.body;

        const student = await Student.findOne({ registrationNumber })
        if (!student) {
            errors.registrationNumber = 'Registration number not found';
            return res.status(404).json(errors);
        }
        const isCorrect = await bcrypt.compare(password, student.password)
        if (!isCorrect) {
            errors.password = 'Invalid Credentials';
            return res.status(404).json(errors);
        }
        const payload = { id: student.id, student };
        jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
                res.json({
                    success: true,
                    token: 'Bearer ' + token
                });
            }
        );


    },
    checkAttendence: async (req, res, next) => {
        try {
            const { subjectName } = req.body
            const studentId = req.user._id
            const attendence = await Attendence.find({ student: studentId }).populate('subject')
            if (!attendence) {
                res.status(400).json({ message: "Attendence not found" })
            }
            res.status(200).json({
                result: attendence.map(att => {
                    let res = {};
                    res.attendence = ((att.lectureAttended / att.totalLecturesByFaculty) * 100).toFixed(2)
                    res.subjectCode = att.subject.subjectCode
                    res.subjectName = att.subject.subjectName
                    res.maxHours = att.subject.totalLectures
                    res.absentHours = att.totalLecturesByFaculty - att.lectureAttended
                    res.lectureAttended = att.lectureAttended
                    res.totalLecturesByFaculty = att.totalLecturesByFaculty
                    return res
                })
            })
        }
        catch (err) {
            console.log("Error in fetching attendence", err.message)
        }

    },
    updatePassword: async (req, res, next) => {
        try {
            const { errors, isValid } = validateStudentUpdatePassword(req.body);
            if (!isValid) {
                return res.status(400).json(errors);
            }
            const { registrationNumber, oldPassword, newPassword, confirmNewPassword } = req.body
            if (newPassword !== confirmNewPassword) {
                errors.confirmNewpassword = 'Password Mismatch'
                return res.status(400).json(errors);
            }
            const student = await Student.findOne({ registrationNumber })
            const isCorrect = await bcrypt.compare(oldPassword, student.password)
            if (!isCorrect) {
                errors.oldPassword = 'Invalid old Password';
                return res.status(404).json(errors);
            }
            let hashedPassword;
            hashedPassword = await bcrypt.hash(newPassword, 10)
            student.password = hashedPassword;
            await student.save()
            res.status(200).json({ message: "Password Updated" })
        }
        catch (err) {
            console.log("Error in updating password", err.message)
        }
    },
    forgotPassword: async (req, res, next) => {
        try {
            const { errors, isValid } = validateForgotPassword(req.body);
            if (!isValid) {
                return res.status(400).json(errors);
            }
            const { email } = req.body
            const student = await Student.findOne({ email })
            if (!student) {
                errors.email = "Email Not found, Provide registered email"
                return res.status(400).json(errors)
            }
            function generateOTP() {
                var digits = '0123456789';
                let OTP = '';
                for (let i = 0; i < 6; i++) {
                    OTP += digits[Math.floor(Math.random() * 10)];
                }
                return OTP;
            }
            const OTP = await generateOTP()
            student.otp = OTP
            await student.save()
            await sendEmail(student.email, OTP, "OTP")
            res.status(200).json({ message: "check your registered email for OTP" })
            const helper = async () => {
                student.otp = ""
                await student.save()
            }
            setTimeout(function () {
                helper()
            }, 300000);
        }
        catch (err) {
            console.log("Error in sending email", err.message)
        }
    },
    postOTP: async (req, res, next) => {
        try {
            const { errors, isValid } = validateOTP(req.body);
            if (!isValid) {
                return res.status(400).json(errors);
            }
            const { email, otp, newPassword, confirmNewPassword } = req.body
            if (newPassword !== confirmNewPassword) {
                errors.confirmNewPassword = 'Password Mismatch'
                return res.status(400).json(errors);
            }
            const student = await Student.findOne({ email });
            if (student.otp !== otp) {
                errors.otp = "Invalid OTP, check your email again"
                return res.status(400).json(errors)
            }
            let hashedPassword;
            hashedPassword = await bcrypt.hash(newPassword, 10)
            student.password = hashedPassword;
            await student.save()
            return res.status(200).json({ message: "Password Changed" })
        }
        catch (err) {
            console.log("Error in submitting otp", err.message)
            return res.status(200)
        }
    },
    updateProfile: async (req, res, next) => {
        try {
            const { email, studentMobileNumber, fatherMobileNumber } = req.body
            const userPostImg = await bufferConversion(req.file.originalname, req.file.buffer)
            const imgResponse = await cloudinary.uploader.upload(userPostImg)
            const student = await Student.findOne({ email })
            if (studentMobileNumber) {
                student.studentMobileNumber = studentMobileNumber
                await student.save()
            }
            if (fatherMobileNumber) {
                student.fatherMobileNumber = fatherMobileNumber
                await student.save()
            }
            student.avatar = imgResponse.secure_url
            await student.save()
            res.status(200).json(student)
        }
        catch (err) {
            console.log("Error in updating Profile", err.message)
        }
    },
    getAllSubjects: async (req, res, next) => {
        try {
            const { department, year } = req.user;
            const subjects = await Subject.find({ department, year })
            if (subjects.length === 0) {
                return res.status(404).json({ message: "No subjects founds" })
            }
            res.status(200).json({ result: subjects })
        }
        catch (err) {
            return res.status(400).json({ "Error in getting all subjects": err.message })
        }
    },
    getMarks: async (req, res, next) => {
        try {
            // console.log("req.user", req.user)
            const { department, year, id } = req.user
            const getMarks = await Mark.find({ department, student: id }).populate('subject')
            // console.log("getMarks", getMarks)

            const Semester1 = getMarks.filter((obj) => {
                return obj.exam === "Semester1"
            })
            const Semester2 = getMarks.filter((obj) => {
                return obj.exam === "Semester2"
            })
            const Semester3 = getMarks.filter((obj) => {
                return obj.exam === "Semester3"
            })
            const Semester4 = getMarks.filter((obj) => {
                return obj.exam === "Semester4"
            })
            const Semester5 = getMarks.filter((obj) => {
                return obj.exam === "Semester5"
            })
            const Semester6 = getMarks.filter((obj) => {
                return obj.exam === "Semester6"
            })
            const Semester7 = getMarks.filter((obj) => {
                return obj.exam === "Semester7"
            })
            const Semester8 = getMarks.filter((obj) => {
                return obj.exam === "Semester8"
            })
            res.status(200).json({
                result: {
                    Semester1,
                    Semester2,
                    Semester3,
                    Semester4,
                    Semester5,
                    Semester6,
                    Semester7,
                    Semester8
                }
            })
        }
        catch (err) {
            return res.status(400).json({ "Error in getting marks": err.message })
        }
    },
    getAllNotices: async (req, res, next) => {
        try {
            const allNotice = await Notice.find({ $or: [{ type: "student" }, { type: "student & faculty" }] }).exec()
            if (allNotice.length === 0) {
                return res.status(404).json({ mag: "No Record Found" })
            } else {
                return res.status(200).json({ data: allNotice })
            }
        } catch (error) {
            res.send(error)
        }
    },
    getExam: async (req, res, next) => {
        const getexam = await Mark.find({ department, section, year })

    }
}
