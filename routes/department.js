var express = require('express')
var router = express.Router()
var departmentController = require('../controllers/department')

router.post('/department/create', departmentController.create)
router.post('/department/update', departmentController.update)
router.get('/department/deleteDepartment', departmentController.deleteDepartment)
router.get('/department/view', departmentController.view)

module.exports = router
