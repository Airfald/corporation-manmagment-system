const express = require('express')
const router = express.Router()
const leaveMessageController = require('../controllers/leave-message')

router.post('/leaveMessage/create', leaveMessageController.create)
router.post('/leaveMessage/update', leaveMessageController.update)
router.get('/leaveMessage/deleteLeaveMessage', leaveMessageController.deleteLeaveMessage)
router.get('/leaveMessage/view', leaveMessageController.view)

module.exports = router
