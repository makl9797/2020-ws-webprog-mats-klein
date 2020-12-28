const Tweet = require('../models/tweetModel')
const mongoose = require('mongoose')

exports.get_Tweet = async (req, res) => {
    try {
        const tweet = await Tweet.find()
        res.json(tweet)
    } catch (err) {
        res.json({"message": err})
    }
}

exports.create_Tweet = async (req, res, next) => {
    await req.tweet.forEach(tweet =>  {
        try {
            new Tweet({
                _id: tweet.id,
                message: tweet.text,
                created_at: tweet.created_at,
                author: tweet.author_id,
                media: tweet.attachments.media_keys
            }).save()
        }catch (err){
            console.log('Found Error' +err)
        }
    })
    next()
}


