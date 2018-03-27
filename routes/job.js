const express = require('express')
const router = express.Router()
const jobController = require('../controllers/job')

router.post('/job/create', jobController.create)
router.post('/job/update', jobController.update)
router.get('/job/deleteJob', jobController.deleteJob)
router.get('/job/view', jobController.view)

module.exports = router
