const mongoose = require('mongoose')

const Schema = mongoose.Schema

let tweetListModel = new Schema({
        tweets: {
            type: [String],
            ref: 'Tweet',
            required: true,
            autopopulate: true
        },
        keyword: {
            type: String,
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

tweetListModel.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('TweetList', tweetListModel)
