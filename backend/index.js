const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const port = 5000
const mongoURI = "mongodb+srv://Razan12:Razan12@cluster0.svwct9s.mongodb.net/foodiofsd?retryWrites=true&w=majority";

app.use(cors());

mongoose.connect(mongoURI)

app.use((reqq, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        "https://capstone-project-frontend-lemon.vercel.app"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.json())
app.use('/api', require('./routes/CreateUser'));
app.use('/api', require('./routes/DisplayData'));
app.use('/api', require('./routes/OrderData'));

app.listen(port, () => {
    console.log(`Fsd app listening on port ${port}`)
})
