const settings = require('../server-config.json')
const fetch = require('node-fetch')


exports.recentSearch = async function (req, res){
    const header = new fetch.Headers()
    const keyword = req.query.key
    header.append("Authorization", settings.bearer.token)

    const requestOptions = {
        method: 'GET',
        headers: header,
        redirect: 'follow'
    }

   await fetch(`https://api.twitter.com/2/tweets/search/recent?query=${keyword}&tweet.fields=created_at&expansions=attachments.media_keys,author_id&media.fields=url`, requestOptions)
        .then(response => response.text())
        .then(result => res.json(result))
        .catch(error => console.log('error', error))
}




