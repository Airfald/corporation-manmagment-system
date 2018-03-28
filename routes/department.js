const express = require('express')
const router = express.Router()
const departmentController = require('../controllers/department')
const verifyToken = require('../middleware/verify-token')

router.post('/department/create', verifyToken, departmentController.create)
router.post('/department/update', verifyToken, departmentController.update)
router.get('/department/deleteDepartment', verifyToken, departmentController.deleteDepartment)
router.get('/department/view', verifyToken, departmentController.view)
router.get('/department/departmentList', verifyToken, departmentController.departmentList)

module.exports = router
