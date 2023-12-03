const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        reqired: true
    },
    email: {
        type: String,
        reqired: true
    },
    password: {
        type: String,
        reqired: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const userModel = mongoose.model("users", userSchema)
module.exports = userModel