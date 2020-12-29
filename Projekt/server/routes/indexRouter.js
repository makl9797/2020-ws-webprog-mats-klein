const express = require('express')
const router = express.Router()

const tweetList = require('./tweetListRouter')

router.get('/search', tweetList)

router.get('/stream', tweetList)

module.exports = router
