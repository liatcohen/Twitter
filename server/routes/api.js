const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Tweet = require('../models/Tweet')

router.get('/', function (req, res) {
    res.send("all good")
})



module.exports = router