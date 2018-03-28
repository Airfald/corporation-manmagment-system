const express = require('express');
const router = express.Router();
const announcementController = require('../controllers/announcement')
const verifyToken = require('../middleware/verify-token')

router.post('/announcement/create', verifyToken, announcementController.create);
router.post('/announcement/update', verifyToken, announcementController.update);
router.get('/announcement/deleteAnnounce', verifyToken, announcementController.deleteAnnounce);
router.get('/announcement/view', verifyToken, announcementController.view);
router.get('/announcement/announcementList', verifyToken, announcementController.announcementList);

module.exports = router;
