

const TweetList = require('../models/tweetListModel')
const twitterConnector = require('../middlewares/twitterConnector')


exports.list = async (req, res) => {
    const key = req.query.key
    try {
        const list = await TweetList.findOne({keyword: key})
        if(list == null) await this.create_List(req, res)
        res.json(list)
    }catch (err){
        console.log(err)
        res.send(err)
    }
}

 const create_List = async (req, res, next) =>{
    await twitterConnector.recentSearch(req.query.key)
    const tweetList = new TweetList({
        tweets: req.body.tweets,
        histories: req.body.histories,
        keyword: req.query.key,
        search_type: req.body.search_type
    })
    try{
        const savedTweetList = await tweetList.save()
        res.json(savedTweetList)
    }catch (err){
        res.json({message: err})
    }
}

