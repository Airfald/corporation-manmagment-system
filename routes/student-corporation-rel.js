const express = require('express')
const router = express.Router()
const studentCorporationRelController = require('../controllers/student-corporation-rel')
const verifyToken = require('../middleware/verify-token')

router.post('/studentCorporationRel/create', verifyToken, studentCorporationRelController.create)
router.post('/studentCorporationRel/update', verifyToken, studentCorporationRelController.update)
router.get('/studentCorporationRel/deleteStudentCorporationRel', verifyToken, studentCorporationRelController.deleteStudentCorporationRel)
router.get('/studentCorporationRel/view', verifyToken, studentCorporationRelController.view)
router.get('/studentCorporationRel/getCorporationStudentList', verifyToken, studentCorporationRelController.getCorporationStudentList)

module.exports = router
