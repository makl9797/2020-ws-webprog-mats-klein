const Author = require('../models/authorModel')

exports.get_Author = async (req, res) => {
    try{
        const author = Author.find()
        res.json(author)
    }catch (err){
        res.json({"message": err})
    }
}

exports.create_Author = async (req, res) => {
    const author = new Author({
        name: req.body.name,
        username: req.body.username,
        profile_url: req.body.profile_url,
        tweets: req.body.tweets
    })
    try{
        const savedAuthor = await author.save()
        res.json(savedAuthor)
    }catch (err){
        res.json({"message": err})
    }
}
