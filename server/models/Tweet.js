const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TweetSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    text: String,
    attachment: {
        attachType: String,
        content: String
    },
    time: Schema.Types.Date,
    parent: {type: Schema.Types.ObjectId, ref: 'Tweet'}
})

const Tweet = mongoose.model("tweet", TweetSchema)

module.exports = Tweet

