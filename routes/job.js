const express = require('express')
const router = express.Router()
const jobController = require('../controllers/job')
const verifyToken = require('../middleware/verify-token')

router.post('/job/create', verifyToken, jobController.create)
router.post('/job/update', verifyToken, jobController.update)
router.get('/job/deleteJob', verifyToken, jobController.deleteJob)
router.get('/job/view', verifyToken, jobController.view)

module.exports = router
