const mongoose = require('mongoose')

const Schema = mongoose.Schema

let historyModel = new Schema({
        tweetLists: {
            type: [String],
            ref: 'twee',
            required: true,
            autopopulate: true
        },
        user: {
            type: String,
            ref: 'User',
            required: true
        }
    },
    {
        collection: 'History'
    }
)

historyModel.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('History', historyModel)
