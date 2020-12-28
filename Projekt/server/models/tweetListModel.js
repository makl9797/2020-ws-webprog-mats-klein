const mongoose = require('mongoose')

const Schema = mongoose.Schema

let tweetListModel = new Schema({
        tweets: {
            type: [String],
            ref: 'Tweet',
            required: true
        },
        histories: {
            type: [Schema.Types.ObjectId],
            ref: 'History',
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

module.exports = mongoose.model('TweetList', tweetListModel)
