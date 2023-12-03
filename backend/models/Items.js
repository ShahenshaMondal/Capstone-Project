const mongoose = require('mongoose')

const { Schema } = mongoose

const foodSchema = new Schema({
    CategoryName: String,
    name: String,
    options: Array,
    description: String
})

const foodModel = mongoose.model("food_items", foodSchema)
module.exports = foodModel
