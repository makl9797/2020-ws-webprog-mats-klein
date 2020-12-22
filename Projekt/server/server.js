// Importing required modules
const cors = require('cors')
const express = require('express')
const myTweets = require('./routes/myTweets')
const mongoose = require('mongoose')
const mongoDB = require('./mongoDB-config')

// connect to database
mongoose.connect(mongoDB.uri, { useNewUrlParser: true }).then(
    () => {console.log('Connected to DataBase') },
    err => { console.log('Can not connect to the database'+ err)}
)

// parse env variables
require('dotenv').config()

// Configuring port
const PORT = process.env.PORT || 9000

const APP = express()

// Configure middlewares
APP.use(cors())
APP.use(express.json())

// Static folder
APP.use(express.static(__dirname + '/views/'))

// Defining route middleware
APP.use('/', myTweets)

// Listening to port
APP.listen(PORT)
console.log(`Listening On http://localhost:${PORT}`)

module.exports = APP
