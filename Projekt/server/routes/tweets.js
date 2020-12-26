const express = require('express');
const router = express.Router();

const tweetList_Controller = require('../controllers/tweetListController')

router.get('/lists', tweetList_Controller.list )
router.post('/lists', tweetList_Controller.create_List)

module.exports = router
