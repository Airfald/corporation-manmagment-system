var express = require('express');
var router = express.Router();
var userRoleController = require('../controllers/user-role')

/* GET users listing. */
router.post('/login', userRoleController.login);
router.post('/adminLogin', userRoleController.adminLogin);
router.post('/createUser', userRoleController.createUser);
router.post('/updatedUser', userRoleController.updatedUser);
router.get('/deleteUser', userRoleController.deleteUser);
router.get('/viewUser', userRoleController.viewUser);

module.exports = router;
