const mongoose = require('mongoose')

const Schema = mongoose.Schema

let historyModel = new Schema({
        _id: {
            type: String,
            required: true
        },
        tweetLists: {
            type: [mongoose.Types.ObjectId],
            ref: 'TweetList',
            required: true,
            autopopulate: false
        },
        keywords: {
            type: [String],
            required: true
        }
    },
    {
        collection: 'History'
    }
)

historyModel.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('History', historyModel)
