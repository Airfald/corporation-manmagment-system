const express = require('express')
const router = express.Router()
const studentJobRelController = require('../controllers/student-job-rel')
const verifyToken = require('../middleware/verify-token')

router.post('/studentJobRel/create', verifyToken, studentJobRelController.create)
router.post('/studentJobRel/update', verifyToken, studentJobRelController.update)
router.get('/studentJobRel/deleteStudentJobRel', verifyToken, studentJobRelController.deleteStudentJobRel)
router.get('/studentJobRel/view', verifyToken, studentJobRelController.view)
router.get('/studentJobRel/studentJobRelList', verifyToken, studentJobRelController.studentJobRelList)

module.exports = router
