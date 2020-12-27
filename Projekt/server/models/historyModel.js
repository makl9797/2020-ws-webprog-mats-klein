const mongoose = require('mongoose')

const Schema = mongoose.Schema

let historyModel = new Schema({
        searches: {
            type: [Schema.Types.ObjectId],
            ref: 'Search',
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        collection: 'History'
    }
)

module.exports = mongoose.model('History', historyModel)
