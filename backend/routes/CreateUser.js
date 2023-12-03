const express = require('express');
const router = express.Router();
const userModel = require("../models/Users");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret = "MynameisGojoSaturoJujutsuKaisen$";

router.post('/createuser', [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password').isLength({ min: 5 })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let securePassword = await bcrypt.hash(req.body.password, salt);

        try {
            await userModel.create({
                name: req.body.name,
                password: securePassword,
                email: req.body.email,
                location: req.body.location,
            })
            res.json({ success: true })
        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    })

router.post('/loginuser', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email;
        try {
            let userData = await userModel.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "Try again" });
            }

            const passwordCompare = await bcrypt.compare(req.body.password, userData.password);
            if (!passwordCompare) {
                return res.status(400).json({ errors: "Try Again" });
            }

            const data = {
                user: {
                    id: userData.id
                }
            }

            const authToken = jwt.sign(data, jwtSecret)

            return res.json({ success: true, authToken: authToken });
        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    })

module.exports = router;
