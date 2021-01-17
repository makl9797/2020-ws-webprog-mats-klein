const express = require('express')
const router = express.Router()

const historyController = require('../controllers/historyController')

router.get('/', historyController.get_History)
router.post('/', historyController.create_History)

module.exports = router
