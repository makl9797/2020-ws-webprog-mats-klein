const express = require('express');
const router = express.Router();

const APTweet = require('../middlewares/APTweet')
const tweetListController = require('../controllers/tweetListController')
const tweetRouter = require('./tweetRouter')

router.use(APTweet.requestSetup)
router.use(APTweet.recentSearch)
router.use(APTweet.typeSorter)
router.use(tweetRouter)
router.use(tweetListController.create_List)


router.get('/lists', tweetListController.list )

module.exports = router
