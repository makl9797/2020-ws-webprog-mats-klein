const TweetList = require('../models/tweetListModel')


exports.hasRecentEntry = async (req, res, next) => {
    const list = await TweetList.findOne({keyword: req.query.key})
    if (list == null) next()
    // TODO fix empty updatedAt field
    if (new Date() - list.updatedAt > 300000) next()
    res.json(list)

}

exports.updateByKey = async (req, res, next) => {
    // TODO update list by Keyword
    next()
}

exports.deleteByKey = async (req, res, next) => {
    // TODO delete list by Keyword
    next()
}

exports.listByKey = async (req, res) => {
    const key = req.query.key
    try {
        const tweetList = await TweetList.findOne({keyword: key})
        res.json(tweetList)
    }catch (err){
        res.send(err)
    }
}

 exports.createByKey = async (req, res, next) =>{
    req.tweetList=[]
    await req.tweet.forEach(tweet => {
        req.tweetList.push(tweet.id)
    })
    const tweetList = new TweetList({
        tweets: req.tweetList,
        keyword: req.query.key,
        search_type: "KEYWORD"
    })

    try{
        await tweetList.save()
        next()
    }catch (err){
        res.json({message: err})
    }
}


