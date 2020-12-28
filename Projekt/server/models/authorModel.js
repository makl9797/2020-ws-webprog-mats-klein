const mongoose = require('mongoose')

const Schema = mongoose.Schema

let authorModel = new Schema({
        _id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        }
    },
    {
        collection: 'Author'
    }
)

module.exports = mongoose.model('Author', authorModel)
