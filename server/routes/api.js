const express = require('express')
const router = express.Router()
const moment = require('moment')
const User = require('../models/User')
const Tweet = require('../models/Tweet')


router.get('/tweets', getTweets)
router.get('/tweet/:id', getTweet)
router.post('/tweet', postTweet)
router.delete('/tweet/:id', deleteTweet)
router.get('/user/:id', getUser)
router.put('/follow/:follow_id', follow)
router.put('/unfollow/:follow_id', unfollow)
router.post('/user', postUser)

function getTweets(req, res) {
    Tweet.find({}).populate("user", "name imageUrl")
        .exec(function (err, tweets) {
            console.log(tweets)
            res.send({ tweets: tweets })
        });
}

async function getTweet(req, res) {
    console.log("get tweets")
    Tweet.findById(req.params.id).populate("user", "name imageUrl")
        .exec(async function (err, tweet) {
            const prev = await getPreviousTweets(tweet)
            const next = await getNextTweets(tweet)
            res.send({ prev, next, tweet })
        })
}

async function getPreviousTweets(tweet) {
    let prev = []
    let tweetID = tweet.parent
    while (tweetID != null) {
        const t = await Tweet.findById(tweetID).populate("user", "name imageUrl")
        tweetID = t.parent
        prev.unshift(t)
    }
    return prev
}

async function getNextTweets(tweet) {
    let next = []
    while (tweet != null) {
        tweet = await Tweet.findOne({ parent: tweet._id }).populate("user", "name imageUrl")
        if (tweet) {
            next.push(tweet)
        }
    }
    return next
}
function postTweet(req, res) {
    const tweet = new Tweet({
        user: getUserHeader(),
        text: req.body.text,
        time: moment().format(),
        parent: req.body.parent || null
    })
    console.log(tweet)
    tweet.save()
    res.send(tweet)
}


function deleteTweet(req, res) {
    //delete all connceted tweets:

    // Tweet.findByIdAndRemove(req.params.id).
}


function getUser(req, res) { //get user tweets
    User.findById(req.params.id).exec((err, user) => {
        Tweet.find({ user: user }).populate("user", "name imageUrl").exec((err, tweets) => {
            res.send({ tweets, user })
        });
    })
}


function follow(req, res) {
    const follow_id = req.params.follow_id
    User.findByIdAndUpdate(getUserHeader(),
        {
            $push: {
                following: follow_id
            }
        }).exec((err, user) => {
            res.send(user)
        })

}

function unfollow(req, res) {
    const follow_id = req.params.follow_id
    User.findByIdAndUpdate(getUserHeader(),
        {
            $pull: {
                following: follow_id
            }
        }).exec((err, user) => {
            res.send(user)
        })

}

function postUser(req, res) {
    const user = new User({
        name: "Luli",
        email: "luli@gmail.com",
        imageUrl: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiVrsb96NrkAhUQGewKHd5kCrYQjRx6BAgBEAQ&url=https%3A%2F%2Ficon-library.net%2Ficon%2Fperson-image-icon-7.html&psig=AOvVaw0B2Fxx2SURD42nDBeT0i4X&ust=1568911512313350",
        creationTime: moment().format()
    })
    // const user = new User({
    //     name: "Liat Cohen",
    //     email: "liatcohen@gmail.com",
    //     imageUrl: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiVrsb96NrkAhUQGewKHd5kCrYQjRx6BAgBEAQ&url=https%3A%2F%2Ficon-library.net%2Ficon%2Fperson-image-icon-7.html&psig=AOvVaw0B2Fxx2SURD42nDBeT0i4X&ust=1568911512313350",
    //     creationTime: moment().format()
    // })
    user.save()
    res.send(user)
}

const getUserHeader = () => {
    // return "5d825f5d190523278ba42324" //luli
    return "5d83422e6f50a23c38db2e0f" //Liat Cohen
}

//TO DO: add likes, delete tweet
module.exports = router
