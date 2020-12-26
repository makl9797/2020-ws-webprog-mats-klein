const TweetList = require('../models/tweetList')

exports.list_all = function (req, res) {
    res.send('NOT IMPLEMENTED: Return every list')
}

exports.list = async function(req, res) {
    const key = req.query.key
    try {
        const list = await TweetList.findOne({keyword: key})
        console.log(list)
        res.json(list)
    }catch (err){
        res.json(err)
    }
}

exports.list_with_key = function (req, res) {
    res.send('NOT IMPLEMENTED: Return list with keyword')
}

exports.list_with_hashtag = function (req, res) {
    res.send('NOT IMPLEMENTED: Return list with hashtag')
}

exports.create_List = async function (req, res) {
    const tweetList = new TweetList({
        tweets: req.body.tweets,
        histories: req.body.histories,
        keyword: req.query.key,
        search_type: req.body.search_type
    })
    try{
        const savedTweetList = await tweetList.save()
        res.json(savedTweetList)
    }catch (err){
        res.json({message: err})
    }
}

exports.add_to_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Add Tweets to List')
}

exports.delete_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Delete TweetList')
}
