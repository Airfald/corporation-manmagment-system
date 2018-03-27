const express = require('express')
const router = express.Router()
const studentCorporationRelController = require('../controllers/student-corporation-rel')

router.post('/studentCorporationRel/create', studentCorporationRelController.create)
router.post('/studentCorporationRel/update', studentCorporationRelController.update)
router.get('/studentCorporationRel/deleteStudentCorporationRel', studentCorporationRelController.deleteStudentCorporationRel)
router.get('/studentCorporationRel/view', studentCorporationRelController.view)

module.exports = router
