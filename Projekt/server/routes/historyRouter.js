const express = require('express')
const router = express.Router()

const historyController = require('../controllers/historyController')

router.use(historyController.get_History)

module.exports = router
