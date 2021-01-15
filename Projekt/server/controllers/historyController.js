const History = require('../models/historyModel')

exports.get_History = async (req, res) => {
    try {
        const history = await History.find()
        res.json(history)
    } catch (err) {
        res.json({"message": err})
    }
}
