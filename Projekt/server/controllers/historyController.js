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
        await new History({
            _id: req.query.user,
            tweetLists: req.body
        }).save()
       res.json({"message": `History for User ${req.query.user} saved`})
    } catch (err) {
        res.json({"message": `Error: ${err}`})
    }
    console.log("historyController: create_History executed")
}
