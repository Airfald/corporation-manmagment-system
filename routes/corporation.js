const express = require('express')
const router = express.Router()
const corporationController = require('../controllers/corporation')
const verifyToken = require('../middleware/verify-token')

router.post('/corporation/create', verifyToken, corporationController.create);
router.post('/corporation/update', verifyToken, corporationController.update);
router.get('/corporation/deleteCorporation', verifyToken, corporationController.deleteCorporation);
router.get('/corporation/view', verifyToken, corporationController.view);
router.get('/corporation/corporationList', verifyToken, corporationController.corporationList);
router.post('/corporation/join', verifyToken, corporationController.joinCorporation);

module.exports = router;
