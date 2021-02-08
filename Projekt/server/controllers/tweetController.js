const Tweet = require('../models/tweetModel')

exports.get_Tweet = async (req, res) => {
    try {
        const tweet = await Tweet.find()
        res.json(tweet)
    } catch (err) {
        res.json({"message": err})
    }
}

exports.create_Tweet = async (req, res, next) => {
    req.newTweets = []
    await req.tweet.forEach(tweet => {
        req.newTweets.push(tweet.id)
        const attachments = tweet.attachments || ""
        Tweet.exists({_id: tweet.id}).then(exists => {
            if (!exists) {
                new Tweet({
                    _id: tweet.id,
                    message: tweet.text,
                    created_at: tweet.created_at,
                    author: tweet.author_id,
                    media: attachments.media_keys
                }).save()
            }
        })
    })
    next()
}


