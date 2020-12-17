"use strict";
window.onload = function () {
    init();

    function init(){
        // Siehe Quelle 1
        fetch("dummy_data.json").then(function (response) {
            return response.json();
        }).then(function (data) {
            insertTweets(data);
            initButtons();
        })
    }

    function initButtons (){
        let submit = document.getElementById("submitSearch");
        submit.addEventListener("click",search);
    }

    function search (){
        let search = <HTMLInputElement>document.getElementById("tweet-search");
        var rule ={
            add: [{
                value: search.value,
                tag: search.value
            }]
        }
        var addRule = new XMLHttpRequest();
        addRule.open('POST','https://api.twitter.com/2/tweets/search/stream/rules');
        addRule.send(JSON.stringify(rule));
        addRule.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log("Adding Rule: Success!");
            }else{
                console.log("Adding Rule: Error");
            }
        }

        var getStream = new XMLHttpRequest();
        getStream.open('GET', 'https://api.twitter.com/2/tweets/search/stream?tweet.fields=created_at&expansions=author_id&user.fields=created_at');
        getStream.send();
        addRule.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log(getStream.responseText);
            }else{
                console.log("Get Stream: Error");
            }
        }
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
