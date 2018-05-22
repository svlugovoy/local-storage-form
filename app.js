console.log('loaded...');



document.querySelector('#tweetBtn').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Tweeted...');
});

document.querySelector('.remove_tweet').addEventListener('click', function() {
    console.log('Removed...');
});
