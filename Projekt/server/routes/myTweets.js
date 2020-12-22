const express = require('express')
const https = require('follow-redirects').https
const fs = require('fs')

const myTweets = express.Router()

myTweets.get('/search', function (req, res){
  const options = {
    'method': 'GET',
    'hostname': 'api.twitter.com',
    'path': '/2/tweets/search/recent',
    'headers': {
      'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANh5JwEAAAAAIpo4uv4P0HTUtdR%2B7jko6%2F74N2c%3DXVl5N5JFkUu0nsm2p8yVCOE0XGs7n6ZnS19K4Wk1rJvfeJHmVv',
      'Cookie': 'personalization_id="v1_4fXB6LgUH8uOPl05InA2RA=="; guest_id=v1%3A160832833250674461'
    },
    'maxRedirects': 20
  };

  const request = https.request(options, function (response) {
    const chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function (chunk) {
      const body = Buffer.concat(chunks);
      res.send(body.toString());
    });

    response.on("error", function (error) {
      console.error(error);
    });
  });

  request.end();

})

module.exports = myTweets
