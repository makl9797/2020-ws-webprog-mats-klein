const mongoose = require('mongoose')

const Schema = mongoose.Schema

let mediaModel = new Schema({
        _id: {
            type: String,
            required: true
        },
        media_type: {
            type: String,
            enum: ['photo', 'animated_gif', 'video'],
            required: true
        },
        url: {
            type: String,
        },
        preview_url: String
    },
    {
        collection: 'Media'
    }
)

module.exports = mongoose.model('Media', mediaModel)
