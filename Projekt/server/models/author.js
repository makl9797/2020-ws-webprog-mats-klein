const mongoose = require('mongoose')

const Schema = mongoose.Schema

let author = new Schema({
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        profile_url: String,
        tweets: {
            type: [Schema.Types.ObjectId],
            ref: 'Author',
            required: true
        }
    },
    {
        collection: 'Author'
    }
)

module.exports = mongoose.model('Author', author)
