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
    await req.tweet.forEach(tweet => async function () {
        await new Tweet({
            _id: tweet.id,
            message: tweet.text,
            created_at: tweet.created_at,
            author: tweet.author_id,
            media: tweet.attachments.media_keys[0]
        }).save()
    })
    next()
}


