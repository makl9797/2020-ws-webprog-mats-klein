const mongoose = require('mongoose')

const Schema = mongoose.Schema

let userModel = new Schema({
        _id: {
            type: Number,
            required: true
        },
        history: {
            type: Schema.Types.ObjectId,
            ref: 'History',
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            select: false
        }
    },
    {
        collection: 'User'
    }
)

module.exports = mongoose.model('User', userModel)
