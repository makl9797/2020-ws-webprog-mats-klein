const Tweet = require('../models/tweetModel')

exports.create_Tweet = async function (req, res) {
    const tweet = new Tweet({
        text: req.body.message,
        created_at: req.body.created_at,
        author: req.body.author,
        media: req.body.media,
        tweetLists: req.body.tweetLists
    })
    try{
        const savedTweet = await tweet.save()
        res.json(savedTweet)
    }catch (err){
        res.json({"message": err})
    }
}


