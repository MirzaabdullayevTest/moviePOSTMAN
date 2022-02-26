const { Schema, model } = require('mongoose')

const adminSchema = new Schema({
    name: String,
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
})

module.exports = model('admin', adminSchema)