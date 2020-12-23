const fetch = require("node-fetch");
const settings = require("../server-config.json")

const header = new fetch.Headers
header.append("Authorization", settings.bearer.token);
//myHeaders.append("Cookie", "personalization_id=\"v1_4fXB6LgUH8uOPl05InA2RA==\"; guest_id=v1%3A160832833250674461");

const requestOptions = {
    method: 'GET',
    headers: header,
    redirect: 'follow'
};

const recentSearch = function (req, res, next) {
    console.log("Test")
    let data = null
    fetch("https://api.twitter.com/2/tweets/search/recent?query=dogs", requestOptions)
        .then(response => response.json())
        .then(result => data = result)
        .catch(error => console.log('error', error));

    return data
}





