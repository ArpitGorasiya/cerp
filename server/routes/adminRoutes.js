const express = require('express')
const router = express.Router()
const passport = require('passport')

const { adminLogin, addFaculty, addStudent,
    addSubject, getAllFaculty, getAllStudents, getAllSubjects,
    addAdmin,
    getAllStudent,
    getAllSubject,
    getAllNotice,
    addNotice,
    getAllStudentdash,
    getAllFacultydash,
    getAllSubjectdash,
    getAllAdmin,
    deleteSubject,
    updatePassword } = require('../controller/adminController')


router.post('/login', adminLogin)
router.post('/addAdmin', passport.authenticate('jwt', { session: false }), addAdmin)
router.post('/getAllFaculty', passport.authenticate('jwt', { session: false }), getAllFaculty)
router.post('/getAllStudent', passport.authenticate('jwt', { session: false }), getAllStudent)
router.post('/getAllSubject', passport.authenticate('jwt', { session: false }), getAllSubject)
router.post('/addFaculty', passport.authenticate('jwt', { session: false }), addFaculty)
router.get('/getFaculties', passport.authenticate('jwt', { session: false }), getAllFaculty)
router.post('/addStudent', passport.authenticate('jwt', { session: false }), addStudent)
router.get('/getStudents', passport.authenticate('jwt', { session: false }), getAllStudents)
router.post('/addSubject', passport.authenticate('jwt', { session: false }), addSubject)
router.get('/getSubjects', passport.authenticate('jwt', { session: false }), getAllSubjects)
// router.post('/addNotice', addNotice)
router.post('/addNotice',  addNotice);
router.get('/getAllNotice', getAllNotice)
router.get('/getAllStudentdash', getAllStudentdash)
router.get('/getAllFacultydash', getAllFacultydash)
router.get('/getAllAdmindash', getAllAdmin)
router.get('/getAllSubjectdash', getAllSubjectdash)
router.delete("/deletesubject/:id", deleteSubject)
router.post('/updatePassword', updatePassword)

module.exports = router