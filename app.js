const tweetsList = document.querySelector('#tweetsList');

eventListeners();

function eventListeners() {
    document.querySelector('#tweetBtn').addEventListener('click', addTweet);
    tweetsList.addEventListener('click', removeTweet);
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}

function addTweet(e) {
    e.preventDefault();
    const tweet = document.querySelector('#tweetText').value;

    if (tweet.trim()) {
        const div = document.createElement('div');
        div.textContent = tweet;
        div.classList = 'single_tweet';
        const divInner = document.createElement('div');
        divInner.textContent = 'X';
        divInner.classList = 'remove_tweet';
        div.appendChild(divInner);
        tweetsList.appendChild(div);

        addTweetToLocalStorage(tweet);
        successTweetedMsg();
    }
    this.parentElement.reset();
}

function removeTweet(e) {
    if (e.target.classList.contains('remove_tweet')) {
        e.target.parentElement.remove();
    }

    removeTweetFromLocalStorage(e.target.parentElement.textContent);
}

function addTweetToLocalStorage(tweet) {
    let tweets = getTweetsFromLocalStorage();
    tweets.push(tweet);
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function getTweetsFromLocalStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    if (tweetsLS === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}

function localStorageOnLoad() {
    let tweets = getTweetsFromLocalStorage();

    tweets.forEach(function (tweet) {
        const div = document.createElement('div');
        div.textContent = tweet;
        div.classList = 'single_tweet';
        const divInner = document.createElement('div');
        divInner.textContent = 'X';
        divInner.classList = 'remove_tweet';
        div.appendChild(divInner);
        tweetsList.appendChild(div);
    });
}

function removeTweetFromLocalStorage(tweet) {

    let tweets = getTweetsFromLocalStorage();
    const tweetDelete = tweet.substring(0, tweet.length - 1);
    tweets.forEach(function (tweetLS, index) {
        if (tweetDelete === tweetLS) {
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function successTweetedMsg(){
    let msgDiv = document.querySelector('#msg');
    msgDiv.classList.remove('hiden');

    setTimeout( () => {
        msgDiv.classList.add('hiden');
    }, 2000);
}