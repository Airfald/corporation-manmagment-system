const express = require('express')
const router = express.Router()
const userRoleController = require('../controllers/user-role')
const verifyToken = require('../middleware/verify-token')

/* GET users listing. */
router.post('/login', userRoleController.login)
router.post('/adminLogin', userRoleController.adminLogin)
router.post('/createUser', verifyToken, userRoleController.createUser)
router.post('/updatedUser', verifyToken, userRoleController.updatedUser)
router.get('/deleteUser', verifyToken, userRoleController.deleteUser)
router.get('/viewUser', verifyToken, userRoleController.viewUser)
router.get('/getUserList', verifyToken, userRoleController.studentList)

module.exports = router
