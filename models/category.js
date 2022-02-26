const { Schema, model } = require('mongoose')

const categorySchema = new Schema({
    type: String,
})

module.exports = model('category', categorySchema)