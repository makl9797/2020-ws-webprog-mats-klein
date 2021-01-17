const History = require('../models/historyModel')

exports.get_History = async (req, res) => {
    try {
        const history = await History.findById(req.query.user)
        res.json(history)
    } catch (err) {
        res.json({"message": err})
    }
    console.log("historyController: get_History executed")
}

exports.create_History = async (req, res) => {
    try {

        res.json(await History.exists({_id: req.query.user}).then(exists => {
            if (exists) {
                History.updateOne({_id: req.query.user}, {
                    tweetLists: req.body
                })
            } else {
                new History({
                    _id: req.query.user,
                    tweetLists: req.body
                }).save()
            }
        }))
    } catch (err) {
        res.json({"message": err})
    }
    console.log("historyController: create_History executed")
}
