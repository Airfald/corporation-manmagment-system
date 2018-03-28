const express = require('express')
const router = express.Router()
const activityController = require('../controllers/activity')
const verifyToken = require('../middleware/verify-token')

router.post('/activity/create', verifyToken, activityController.create)
router.post('/activity/update', verifyToken, activityController.update)
router.get('/activity/deleteActivity', verifyToken, activityController.deleteActivity)
router.get('/activity/view', verifyToken, activityController.view)
router.get('/activity/activityList', verifyToken, activityController.activityList)

module.exports = router
