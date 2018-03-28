const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')
const verifyToken = require('../middleware/verify-token')

router.post('/admin/create', verifyToken, adminController.create)
router.post('/admin/update', verifyToken, adminController.update)
router.get('/admin/deleteAdmin', verifyToken, adminController.deleteAdmin)
router.get('/admin/view', verifyToken, adminController.view)

module.exports = router
