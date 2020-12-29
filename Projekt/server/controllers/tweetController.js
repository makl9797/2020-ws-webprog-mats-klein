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
    // TODO block duplicates
    req.newTweets = []
    await req.tweet.forEach(tweet => {
        req.newTweets.push(tweet.id)
        const attachments = tweet.attachments || ""
        try {
            new Tweet({
                _id: tweet.id,
                message: tweet.text,
                created_at: tweet.created_at,
                author: tweet.author_id,
                media: attachments.media_keys
            }).save()
        } catch (err) {
            console.log('Found Error' + err)
        }
    })
    console.log("tweetController: create_Tweet executed")
    next()
}


