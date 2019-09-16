const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    email: String,
    imageUrl: String,
    following: [Schema.Types.ObjectId],
    creationTime: Schema.Types.Date
})

const User = mongoose.model("user", UserSchema)

module.exports = User

