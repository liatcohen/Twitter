const express = require('express')
const router = express.Router()
const moment = require('moment')
const User = require('../models/User')
const Tweet = require('../models/Tweet')

router.get('/', function (req, res) {
    res.send("all good")
})

router.get('/tweets', async function (req, res) {
    const tweets = await Tweet.find({})
    res.send({ tweets: tweets })
})

router.post('/tweet', function (req, res) {
    console.log(req.headers)
    const tweet = new Tweet({
        user: getUserHeader(),
        text: req.body.text,
        time: moment().format()
    })
    console.log(tweet)
    tweet.save()
    res.send(tweet)
})

// router.post('/user', function (req, res) {
//     const user = new User({
//         name: "Luli",
//         email: "luli@gmail.com",
//         imageUrl: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiVrsb96NrkAhUQGewKHd5kCrYQjRx6BAgBEAQ&url=https%3A%2F%2Ficon-library.net%2Ficon%2Fperson-image-icon-7.html&psig=AOvVaw0B2Fxx2SURD42nDBeT0i4X&ust=1568911512313350",
//         creationTime: moment().format()
//     })
//     user.save()
//     res.send(user)
// })

const getUserHeader = () => {
    return "5d825f5d190523278ba42324"
}

module.exports = router