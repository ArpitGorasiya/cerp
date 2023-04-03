const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    mname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String
    },
    password: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true
    },
    // subjects: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'subject'
    //     }
    // ],
    aadharCard: {
        type: Number
    },
    gender: {
        type: String
    },
    registrationNumber: {
        type: String
    },
    department: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    batch: {
        type: String
    },
    dob: {
        type: String,
        required: true
    },
    studentMobileNumber: {
        type: Number,
        required: true
    },
    fatherMobileNumber: {
        type: Number,
        required: true
    },
    otp: {
        type: String
    }
})

module.exports = mongoose.model('student', studentSchema)