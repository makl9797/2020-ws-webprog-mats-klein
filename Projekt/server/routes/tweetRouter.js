const express = require('express')
const router = express.Router()

const tweetController = require('../controllers/tweetController')

router.get('/', tweetController.create_Tweet)

module.exports = router
