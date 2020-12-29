const express = require('express')
const router = express.Router()

const APTweet = require('../middlewares/APTweet')
const tweetListController = require('../controllers/tweetListController')
const tweetRouter = require('./tweetRouter')

router.use(tweetListController.hasRecentEntry)
router.use(APTweet)
router.use(tweetRouter)
router.use(tweetListController.createByKey)


router.get('/list', tweetListController.listByKey)

module.exports = router
