"use strict";

window.onload = function () {
    init();

    function init(){
        // Siehe Quelle 1
        fetch("dummy_data.json").then(function (response) {
            return response.json();
        }).then(function (data) {
            insertTweets(data);
        })
    }

    function initButtons (){
        let submit = document.getElementById("submitSearch");
        submit.addEventListener("click",search());
    }

    function search (){
        let search = document.getElementById("tweet-search");
    }

    function insertTweets(data){
        data.dummy.forEach(function (tweet){
            createTweet(tweet);
        })
    }

    function createTweet(tweet_data){
        let content = document.getElementById("content");

        let tweet = document.createElement("article");
        tweet.className="tweet";

        let user = document.createElement("label");
        user.className ="user";

        user.innerText = tweet_data.includes.users[0].name;

        let date = document.createElement("label");
        date.className="date";

        date.innerText = tweet_data.data.created_at;

        let text = document.createElement("span");
        text.className="message"

        text.innerText = tweet_data.data.text;

        tweet.appendChild(user);
        tweet.appendChild(date);
        tweet.appendChild(text);
        content.appendChild(tweet);
    }
};
