const Tweet = require('../models/tweetModel')

exports.get_Tweet = async (req, res) => {
    try {
        const tweet = await Tweet.find()
        res.json(tweet)
    } catch (err) {
        res.json({"message": err})
    }
}

exports.create_Tweet = async (req, res) => {
    const tweet = new Tweet({
        message: req.body.message,
        created_at: req.body.created_at,
        author: req.body.author,
        media: req.body.media,
        tweetLists: req.body.tweetLists
    })
    try {
        const savedTweet = await tweet.save()
        res.json(savedTweet)
    } catch (err) {
        res.json({"message": err})
    }
}


