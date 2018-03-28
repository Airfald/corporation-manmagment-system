const express = require('express')
const router = express.Router()
const leaveMessageController = require('../controllers/leave-message')
const verifyToken = require('../middleware/verify-token')

router.post('/leaveMessage/create', verifyToken, leaveMessageController.create)
router.post('/leaveMessage/update', verifyToken, leaveMessageController.update)
router.get('/leaveMessage/deleteLeaveMessage', verifyToken, leaveMessageController.deleteLeaveMessage)
router.get('/leaveMessage/view', verifyToken, leaveMessageController.view)
router.get('/leaveMessage/leaveMessageList', verifyToken, leaveMessageController.leaveMessageList)

module.exports = router
