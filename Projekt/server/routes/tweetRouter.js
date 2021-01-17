const express = require('express')
const router = express.Router()

const tweetController = require('../controllers/tweetController')
const mediaRouter = require('./mediaRouter')
const authorRouter = require('./authorRouter')

router.use(authorRouter)
router.use(mediaRouter)
router.use(tweetController.create_Tweet)

module.exports = router
