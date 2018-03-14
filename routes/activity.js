var express = require('express');
var router = express.Router();
var activityController = require('../controllers/activity')

router.get('/activity/view', activityController.viewActivity);
router.get('/activity/save', activityController.saveActivity);
router.get('/activity/delete', activityController.deleteActivity);

module.exports = router;
