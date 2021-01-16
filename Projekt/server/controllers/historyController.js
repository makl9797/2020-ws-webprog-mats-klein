const History = require('../models/historyModel')

exports.get_History = async (req, res) => {
    try {
        const history = await History.find()
        res.json(history)
    } catch (err) {
        res.json({"message": err})
    }
}

exports.create_History = async (req, res) => {
    let userID = req.query.from
    let history = req.body
   try {
        await new History({
            tweetLists: history,
            user: userID
        }).save()
    } catch (err) {
        res.json({"message": err})
    }
    console.log("historyController: create_History executed")
}
