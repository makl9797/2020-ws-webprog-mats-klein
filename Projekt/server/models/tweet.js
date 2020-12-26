const mongoose = require('mongoose')

const Schema = mongoose.Schema

let tweet = new Schema({
        text: {
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
        searches: {
            type: [Schema.Types.ObjectId],
            ref: 'Tweet',
            required: true
        }
    },
    {
        collection: 'Tweet'
    }
)


module.exports = mongoose.model('Tweet', tweet)
