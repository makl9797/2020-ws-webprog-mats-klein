"use strict";
window.onload = function () {
    init();
    function init() {
        // Siehe Quelle 1
        fetch("dummy_data.json").then(function (response) {
            return response.json();
        }).then(function (data) {
            insertTweets(data);
        });
    }
    function insertTweets(data) {
        data.dummy.forEach(function (tweet) {
            createTweet(tweet);
        });
    }
    function createTweet(tweet_data) {
        var content = document.getElementById("content");
        var tweet = document.createElement("article");
        tweet.className = "tweet";
        var user = document.createElement("label");
        user.className = "user";
        user.innerText = tweet_data.includes.users[0].name;
        var date = document.createElement("label");
        date.className = "date";
        date.innerText = tweet_data.data.created_at;
        var text = document.createElement("span");
        text.className = "message";
        text.innerText = tweet_data.data.text;
        tweet.appendChild(user);
        tweet.appendChild(date);
        tweet.appendChild(text);
        content.appendChild(tweet);
    }
};
