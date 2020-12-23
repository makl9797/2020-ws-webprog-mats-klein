const mongoose = require('mongoose')

const Schema = mongoose.Schema

let search = new Schema({
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
        refresh_date: {
            type: Date,
            required: true
        },
        search_type: {
            type: String,
            enum: ['HASHTAG', 'KEYWORD'],
            required: true
        }
    },
    {
        collection: 'Search'
    }
)

module.exports = mongoose.model('Search', search)
