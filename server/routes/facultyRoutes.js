const express = require('express')
const router = express.Router()
const passport = require('passport')
const upload = require('../utils/multer')

const { fetchStudents, markAttendence, facultyLogin, getAllSubjects, getAllAssignmentf,
    updatePassword, forgotPassword, postOTP, uploadMarks, updateProfile, getAllNoticef, addAssignment } = require('../controller/facultyController')

router.post('/login', facultyLogin)
router.post('/forgotPassword', forgotPassword)
router.post('/postOTP', postOTP)
router.get('/allNotice', passport.authenticate('jwt', { session: false }), getAllNoticef)
router.post('/updateProfile', passport.authenticate('jwt', { session: false }), upload.single("avatar"), updateProfile)
router.post('/fetchStudents', passport.authenticate('jwt', { session: false }), fetchStudents)
router.post('/fetchAllSubjects', passport.authenticate('jwt', { session: false }), getAllSubjects)
router.post('/markAttendence', passport.authenticate('jwt', { session: false }), markAttendence)
router.post('/uploadMarks', passport.authenticate('jwt', { session: false }), uploadMarks)
router.post('/updatePassword', passport.authenticate('jwt', { session: false }), updatePassword)
router.post('/addAssignment', passport.authenticate('jwt', { session: false }), addAssignment)
router.get('/getAllAssignmentf',  getAllAssignmentf)

module.exports = router
