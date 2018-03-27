const express = require('express')
const router = express.Router()
const studentJobRelController = require('../controllers/student-job-rel')

router.post('/studentJobRel/create', studentJobRelController.create)
router.post('/studentJobRel/update', studentJobRelController.update)
router.get('/studentJobRel/deleteStudentJobRel', studentJobRelController.deleteStudentJobRel)
router.get('/studentJobRel/view', studentJobRelController.view)

module.exports = router
