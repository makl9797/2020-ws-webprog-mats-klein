const express = require('express')
const api = require('../twitter/search')

const routing = express.Router()

routing.get('/search', function (req, res) {
    res.send('HTTP GET wurde ausgeführt an den Server und es wurde diese Nachricht als Antwort geliefert!')
})


module.exports = routing
