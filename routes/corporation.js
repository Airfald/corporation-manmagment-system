var express = require('express')
var router = express.Router()
var corporationController = require('../controllers/corporation')

router.post('/corporation/create', corporationController.create);
router.post('/corporation/update', corporationController.update);
router.get('/corporation/deleteCorporation', corporationController.deleteAnnounce);
router.get('/corporation/view', corporationController.view);

module.exports = router;
