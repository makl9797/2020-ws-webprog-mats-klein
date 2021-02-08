const express = require('express')
const settings = require('../server-config.json')
const fetch = require('node-fetch')

const router = express.Router()

const requestSetup = async (req, res, next) => {
    const header = new fetch.Headers()
    header.append("Authorization", `Bearer ${settings.bearer.token}`)
    req.APTweetOpt = {
        method: 'GET',
        headers: header,
        redirect: 'follow'
    }
    next()
}

const recentSearch = async (req, res, next) => {
    const keyword = req.query.key
    await fetch(`https://api.twitter.com/2/tweets/search/recent?query=${keyword}&max_results=50&tweet.fields=created_at&expansions=attachments.media_keys,author_id&media.fields=url`, req.APTweetOpt)
        .then(response => response.json())
        .then(result => req.APTweetRaw = result)
        .catch(error => console.log('error', error))
    next()
}

const typeSorter = async (req, res, next) => {
    req.author = req.APTweetRaw.includes.users
    req.media = req.APTweetRaw.includes.media || "no media"
    req.tweet = req.APTweetRaw.data
    next()
}

router.use(requestSetup)
router.use(recentSearch)
router.use(typeSorter)

module.exports = router



