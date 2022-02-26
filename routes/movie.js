const { Router } = require('express')
const router = Router()
const Movie = require('../models/movie')

router.get('/', async (req, res) => {
    const movies = await Movie.find().sort({ imdb: -1 }).limit(1)
    res.send({
        message: 'Movie kirdik',
        movies
    })
})

/* gt 1900 <=  >= 2000 lt */

router.get('/:start/:end', async (req, res) => {
    const movies = await Movie.find({
        year: { $gt: req.params.start, $lt: req.params.end }
    })

    res.send({
        movies
    })
})

router.post('/create', async (req, res) => {

    const { name,
        imdb,
        year,
        category } = req.body

    try {
        const movie = new Movie({
            name,
            imdb,
            year,
            category
        })

        await movie.save(movie)
        res.json(movie)

    } catch (error) {
        console.log(error);
    }

})

module.exports = router