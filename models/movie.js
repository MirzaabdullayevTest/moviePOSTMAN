const { Schema, model } = require('mongoose')

const movieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imdb: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

module.exports = model('movie', movieSchema)