const TweetList = require('../models/tweetListModel')

exports.hasRecentEntry = async (req, res, next) => {
    const list = await TweetList.findOne({keyword: req.query.key})
    if (list == null) next()
    else {
        if (new Date() - list.updatedAt > 300000) { // 300000ms = 5min
            req.update = true
            next()
        } else {
            res.json(list)
        }
    }
}

exports.createOrUpdate = async (req, res, next) => {
    if (req.update) {
        this.updateByKey(req, res, next)
    } else {
        this.createByKey(req, res, next)
    }
}

exports.updateByKey = async (req, res, next) => {
    const list = await TweetList.findOne({keyword: req.query.key})
    const tweetList = req.newTweets
    list.tweets.forEach(tweet => {
        if (!tweetList.includes(tweet.id)) {
            tweetList.push(tweet.id)
        }
    })
    try {
        await TweetList.updateOne({keyword: req.query.key}, {
            tweets: tweetList
        })
    } catch (err) {
        res.json({message: err})
    }
    next()
}

exports.getListByKey = async (req, res) => {
    try {
        const tweetList = await TweetList.findOne({keyword: req.query.key})
        res.json(tweetList)
    } catch (err) {
        res.send(err)
    }
}

exports.getListByID = async (req, res) => {
    try {
        const tweetList = await TweetList.findById(req.query.id)
        res.json(tweetList)
    } catch (err) {
        res.send(err)
    }
}

exports.createByKey = async (req, res, next) => {
    let tweetList = []
    await req.tweet.forEach(tweet => {
        tweetList.push(tweet.id)
    })
    try {
        await new TweetList({
            tweets: tweetList,
            keyword: req.query.key
        }).save()
        next()
    } catch (err) {
        res.json({message: err})
    }
}


