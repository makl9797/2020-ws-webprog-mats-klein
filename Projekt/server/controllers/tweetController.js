const Tweet = require('../models/tweet')

exports.create_Tweet = async function (req, res) {
    // TODO Edit tweet input and implement routes
    const tweet = new Tweet({
        media_type: req.params.media_type,
        url: req.body.url,
        preview_url: req.body.preview_url
    })
    try{
        const savedTweet = await tweet.save()
        res.json(savedTweet)
    }catch (err){
        res.json({"message": err})
    }
}


