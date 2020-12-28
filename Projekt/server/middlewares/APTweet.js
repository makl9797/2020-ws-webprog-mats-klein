const settings = require('../server-config.json')
const fetch = require('node-fetch')

exports.requestSetup = (req, res, next) => {
    const header = new fetch.Headers()
    header.append("Authorization", `Bearer ${settings.bearer.token}`)
    req.requestOptions = {
        method: 'GET',
        headers: header,
        redirect: 'follow'
    }
    next()
}

exports.recentSearch = async (req, res, next) => {
    const keyword = req.query.key
    await fetch(`https://api.twitter.com/2/tweets/search/recent?query=${keyword}&tweet.fields=created_at&expansions=attachments.media_keys,author_id&media.fields=url`, req.requestOptions)
        .then(response => response.json())
        .then(result => req.raw_data = result)
        .catch(error => console.log('error', error))
    next()
}

exports.typeSorter = async (req, res, next) => {
    const unparsed = req.raw_data
    req.author = unparsed.includes.users
    req.media = unparsed.includes.media
    req.tweet = unparsed.data
    next()
}






