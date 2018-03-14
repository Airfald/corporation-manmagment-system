var express = require('express');
var router = express.Router();
var leaveMessageController = require('../controllers/leave-message');

/* GET users listing. */
router.post('/leaveMessage/save', leaveMessageController.leaveMessageSave);
router.get('/leaveMessage/view', leaveMessageController.leaveMessageView);
router.post('/leaveMessage/delete', leaveMessageController.leaveMessageDelete);

module.exports = router;
