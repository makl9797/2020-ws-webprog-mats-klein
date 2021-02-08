const express = require('express')
const router = express.Router()

const tweetList = require('./tweetListRouter')

router.get('/search', tweetList)

module.exports = router
