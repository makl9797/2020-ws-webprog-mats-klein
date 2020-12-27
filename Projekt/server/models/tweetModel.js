const mongoose = require('mongoose')

const Schema = mongoose.Schema

let tweetModel = new Schema({
        message: {
            type: String,
            required: true
        },
        created_at: {
            type: Date,
            required: true
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'Author',
            required: true
        },
        media: {
            type: Schema.Types.ObjectId,
            ref: 'Media'
        },
        tweetLists: {
            type: [Schema.Types.ObjectId],
            ref: 'Tweet',
            required: true
        }
    },
    {
        collection: 'Tweet'
    }
)


module.exports = mongoose.model('Tweet', tweetModel)
