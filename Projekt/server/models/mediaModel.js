const mongoose = require('mongoose')

const Schema = mongoose.Schema

let mediaModel = new Schema({
        media_type: {
            type: String,
            enum: ['IMAGE', 'GIF', 'VIDEO'],
            required: true
        },
        url: {
            type: String,
            required: true
        },
        preview_url: String
    },
    {
        collection: 'Media'
    }
)

module.exports = mongoose.model('Media', mediaModel)
