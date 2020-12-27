const express = require('express')
const router = express.Router()

const tweetController = require('../controllers/tweetController')

router.get('/', tweetController.get_Tweet)
router.post('/', tweetController.create_Tweet)


module.exports = router
