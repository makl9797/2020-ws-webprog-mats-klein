const express = require('express')
const APP = express()

const settings = require('../server-config.json')
const fetch = require('node-fetch')

const requestSetup = (req, res, next) => {
    req.requestHeader = new fetch.Headers()
    req.requestHeader.append("Authorization", `Bearer ${settings.bearer.token}`)
    req.requestOptions = {
        method: 'GET',
        headers: req.requestHeader,
        redirect: 'follow'
    }
    next()
}

APP.use(requestSetup)

const recentSearch = async function (req, res){


   await fetch(`https://api.twitter.com/2/tweets/search/recent?query=${keyword}&tweet.fields=created_at&expansions=attachments.media_keys,author_id&media.fields=url`, requestOptions)
        .then(response => response.text())
        .then(result => res.json(result))
        .catch(error => console.log('error', error))
}






