const express = require('express')
const router = express.Router()
const moment = require('moment')
const User = require('../models/User')
const Tweet = require('../models/Tweet')
const passport = require('passport')
const auth = require('../auth')
const defaultImage =
"https://www.r-users.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
const axios = require('axios')
router.use(passport.initialize())
router.use(passport.session())


router.post('/login',
    auth.optional,
    passport.authenticate('local', {}, null),
    (req, res) => res.json({token: req.user.generateJWT()}))

router.post('/signup', auth.optional, signup)
router.get('/tweets', auth.required, getTweets)
router.get('/tweet/:id', auth.required, getTweet)
router.post('/tweet', auth.required, postTweet)
router.delete('/tweet/:id', auth.required, deleteTweet)
router.get('/user/:id', auth.required, getUser)
router.put('/follow/:follow_id', auth.required, follow)
router.put('/unfollow/:follow_id', auth.required, unfollow)

//POST new user route (optional, everyone has access)
function signup(req, res) {
    const {body: {user}} = req
    if (!user.email) {
        return res.status(422).json({
            errors: {
                email: 'is required',
            },
        })
    }
    if (!user.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        })
    }
    user.imageUrl = defaultImage
    user.creationTime = moment().format()
    const finalUser = new User(user)
    finalUser.setPassword(user.password)
    return finalUser.save()
        .then(() => res.json({user: finalUser.toAuthJSON()}))
}

function getTweets(req, res) {
    Tweet.find({}).populate("user", "name imageUrl")
        .exec(function (err, tweets) {
            console.log(tweets)
            res.send({tweets: tweets})
        })
}

async function getTweet(req, res) {
    console.log("get tweet")
    Tweet.findById(req.params.id).populate("user", "name imageUrl")
        .exec(async function (err, tweet) {
            const prev = await getPreviousTweets(tweet)
            const next = await getNextTweets(tweet)
            res.send({prev, next, tweet})
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
        tweet = await Tweet.findOne({parent: tweet._id}).populate("user", "name imageUrl")
        if (tweet) {
            next.push(tweet)
        }
    }
    return next
}

function postTweet(req, res) {
    const tweet = new Tweet({
        user: req.user.id,
        text: req.body.text,
        time: moment().format(),
        parent: req.body.parent || null
    })
    tweet.save()
    res.send(tweet)
}


function deleteTweet(req, res) {
    //delete all connceted tweets:

    // Tweet.findByIdAndRemove(req.params.id).
}


function getUser(req, res) { //get user tweets
    User.findById(req.params.id).exec((err, user) => {
        Tweet.find({user: user}).populate("user", "name imageUrl").exec((err, tweets) => {
            res.send({tweets, user})
        })
    })
}


function follow(req, res) {
    const follow_id = req.params.follow_id
    User.findByIdAndUpdate(req.user.id,
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
    User.findByIdAndUpdate(req.user.id,
        {
            $pull: {
                following: follow_id
            }
        }).exec((err, user) => {
        res.send(user)
    })

}

//TO DO: add likes, delete tweet
module.exports = router
