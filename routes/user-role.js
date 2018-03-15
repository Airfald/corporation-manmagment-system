var express = require('express');
var router = express.Router();
var userRoleController = require('../controllers/user-role')

/* GET users listing. */
router.post('/login', userRoleController.login);
router.post('/adminLogin', userRoleController.adminLogin);

module.exports = router;
