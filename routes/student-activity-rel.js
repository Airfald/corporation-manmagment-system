const express = require('express')
const router = express.Router()
const studentActivityRelController = require('../controllers/student-activity-rel')
const verifyToken = require('../middleware/verify-token')

router.post('/studentActivityRel/create', verifyToken, studentActivityRelController.create)
router.post('/studentActivityRel/update', verifyToken, studentActivityRelController.update)
router.get('/studentActivityRel/deletestudentActivityRel', verifyToken, studentActivityRelController.deleteStudentActivityRel)
router.get('/studentActivityRel/view', verifyToken, studentActivityRelController.view)

module.exports = router
