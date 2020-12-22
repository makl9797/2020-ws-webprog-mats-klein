const express = require('express')
const twitterReq = require('../twitter/search')


const myTweets = express.Router()

myTweets.get('/search', function (req, res){
    res.send(twitterReq.json)
})

module.exports = myTweets
