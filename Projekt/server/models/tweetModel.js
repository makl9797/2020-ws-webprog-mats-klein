const mongoose = require('mongoose')
const Schema = mongoose.Schema

let tweetModel = new Schema({
        _id: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        created_at: {
            type: String,
            required: true
        },
        author: {
            type: String,
            ref: 'Author',
            required: true,
            autopopulate: true
        },
        media: {
            type: [String],
            ref: 'Media',
            autopopulate: true
        }
    },
    {
        collection: 'Tweet'
    }
)

tweetModel.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Tweet', tweetModel)
