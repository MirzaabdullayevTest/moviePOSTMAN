const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const adminRouter = require('./routes/admin')
const categoryRouter = require('./routes/category')
const movieRouter = require('./routes/movie')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let mongoUri = ''

if (process.env.MONGO_URI_LOCAL) {
    mongoUri = process.env.MONGO_URI_LOCAL

} else {
    mongoUri = process.env.MONGO_URI
}


app.use('/admin', adminRouter)
app.use('/category', categoryRouter)
app.use('/movie', movieRouter)

app.use(morgan('tiny'))
const port = process.env.POST || '3001'

async function start() {
    try {
        app.listen(port, () => {
            console.log('Server working on port', port);
        })

        await mongoose.connect(mongoUri, () => {
            console.log('MongoDB connected');
        })
    } catch (error) {
        console.log(error);
    }
}


start()