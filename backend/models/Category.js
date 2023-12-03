const mongoose = require('mongoose')

const { Schema } = mongoose

const categorySchema = new Schema({
    CategoryName: String
})

const categoryModel = mongoose.model("food_category", categorySchema)
module.exports = categoryModel
