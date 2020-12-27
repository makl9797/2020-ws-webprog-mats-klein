const mongoose = require('mongoose')

const Schema = mongoose.Schema

let tweetModel = new Schema({
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
            required: true
        },
        media: {
            type: String,
            ref: 'Media'
        },
        tweetLists: {
            type: String,
            ref: 'Tweet',
            required: true
        }
    },
    {
        collection: 'Tweet'
    }
)


module.exports = mongoose.model('Tweet', tweetModel)
