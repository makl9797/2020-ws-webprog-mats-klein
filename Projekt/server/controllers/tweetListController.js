const TweetList = require('../models/tweetListModel')



exports.list = async (req, res) => {
    const key = req.query.key
    try {
        const list = await TweetList.findOne({keyword: key})
        res.json(list)
    }catch (err){
        console.log(err)
        res.send(err)
    }
}

 exports.create_List = async (req, res, next) =>{
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


