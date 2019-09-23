const express = require('express')
const app = express()
const api = require('./server/routes/api')
const port = process.env.PORT || 4000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const loadModels = require('./server/models/loadModels')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/twitter', {useNewUrlParser: true})
loadModels()

const configurePassport = require("./server/config/passport")
configurePassport()

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

// app.use((req, res, next) => {
//     req.headers['authorization'] = 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlsaWFrYXBAZ21haWwuY29tIiwiaWQiOiI1ZDg3ZDcwYjllYTZjYjE4MzNiNzliZjQiLCJleHAiOjE1NzQzNzEwOTksImlhdCI6MTU2OTE4MzQ5OX0.7x1NhDvGAOidCRBGIQ7uYkRvIwVzfoWoPw-WfsPOM84'
//     next()
// })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', api)

app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
