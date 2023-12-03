const express = require('express');
const router = express.Router();
const foodModel = require('../models/Items');
const categoryModel = require('../models/Category');

router.post('/fooddata', async (req, res) => {
    await foodModel.find({})
        .then(async function (data) {
            await categoryModel.find({})
                .then(function (catData) {
                    global.food_items = data;
                    global.food_category = catData;
                    res.send([global.food_items, global.food_category]);
                })
                .catch(function (err) {
                    console.log(err);
                })
        })
        .catch(function (err) {
            console.log(err);
            res.send('Server Error');
        })
})

module.exports = router;

