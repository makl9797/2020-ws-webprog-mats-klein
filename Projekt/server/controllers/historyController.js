const History = require('../models/historyModel')

exports.get_History = async (req, res) => {
    try {
        const history = await History.findById(req.query.user)
        res.json(history)
    } catch (err) {
        res.json({"message": err})
    }
}

exports.create_History = async (req, res) => {
    try {
        History.exists({_id: req.query.user}).then(async exists => {
            if (exists) {
                await History.updateOne({_id: req.query.user}, {
                    tweetLists: req.body.ids,
                    keywords: req.body.names
                })
            } else {
                await new History({
                    _id: req.query.user,
                    tweetLists: req.body.ids,
                    keywords: req.body.names
                }).save()
            }
        })
        res.json(history)
    } catch (err) {
        res.json({"message": err})
    }
}
