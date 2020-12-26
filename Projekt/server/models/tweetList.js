const mongoose = require('mongoose')

const Schema = mongoose.Schema

let tweetList = new Schema({
        tweets: {
            type: [Schema.Types.ObjectId],
            ref: 'Tweet',
            required: true
        },
        histories: {
            type: [Schema.Types.ObjectId],
            ref: 'History',
            required: true
        },
        keyword: {
            type:String,
            required: true
        },
        search_type: {
            type: String,
            enum: ['HASHTAG', 'KEYWORD', 'PROFILE'],
            required: true
        }
    },
    {
        timestamps: true,
        collection: 'TweetList'
    }
)

module.exports = mongoose.model('TweetList', tweetList)
