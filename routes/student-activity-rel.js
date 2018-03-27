const express = require('express')
const router = express.Router()
const studentActivityRelController = require('../controllers/student-activity-rel')

router.post('/studentActivityRel/create', studentActivityRelController.create)
router.post('/studentActivityRel/update', studentActivityRelController.update)
router.get('/studentActivityRel/deletestudentActivityRel', studentActivityRelController.deleteStudentActivityRel)
router.get('/studentActivityRel/view', studentActivityRelController.view)

module.exports = router
