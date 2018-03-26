var express = require('express');
var router = express.Router();
var announcementController = require('../controllers/announcement')

router.post('/announcement/create', announcementController.create);
router.post('/announcement/update', announcementController.update);
router.get('/announcement/deleteAnnounce', announcementController.deleteAnnounce);
router.get('/announcement/view', announcementController.view);

module.exports = router;
