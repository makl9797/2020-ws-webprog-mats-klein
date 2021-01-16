const express = require('express')
const router = express.Router()

const historyController = require('../controllers/historyController')

router.use(historyController.create_History)

module.exports = router
