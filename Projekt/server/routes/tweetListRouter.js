const express = require('express')
const router = express.Router()

const APTweet = require('../middlewares/APTweet')
const tweetListController = require('../controllers/tweetListController')
const tweetRouter = require('./tweetRouter')

router.use('/byKey', tweetListController.hasRecentEntry)
router.use('/byKey', APTweet)
router.use('/byKey', tweetRouter)
router.use('/byKey', tweetListController.createOrUpdate)

router.get('/byKey',tweetListController.getListByKey)

router.get('/byID', tweetListController.getListByID)

module.exports = router
