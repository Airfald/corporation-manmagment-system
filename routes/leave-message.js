var express = require('express');
var router = express.Router();
var leaveMessageController = require('../controllers/leave-message');

/* GET users listing. */
router.get('/leaveMessage/view', leaveMessageController.view);

module.exports = router;
