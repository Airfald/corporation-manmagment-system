const express = require('express')
const router = express.Router()
const activityController = require('../controllers/activity')

router.post('/activity/create', activityController.create)
router.post('/activity/update', activityController.update)
router.get('/activity/deleteActivity', activityController.deleteActivity)
router.get('/activity/view', activityController.view)

module.exports = router
