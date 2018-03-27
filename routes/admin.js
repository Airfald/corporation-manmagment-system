const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')

router.post('/admin/create', adminController.create)
router.post('/admin/update', adminController.update)
router.get('/admin/deleteAdmin', adminController.deleteAdmin)
router.get('/admin/view', adminController.view)

module.exports = router
