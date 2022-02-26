const { Router } = require('express')
const { mongoose } = require('mongoose')
const router = Router()
const Category = require('../models/category')
const Movie = require('../models/movie')

router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id)

    const movies = await Movie.aggregate([
        {
            $match: {
                category: mongoose.Types.ObjectId(req.params.id)
            }
        }
    ])

    res.send({
        category,
        movies
    })
})

router.get('/', async (req, res) => {
    const categories = await Category.find()
    res.send({
        message: 'category kirdik',
        categories
    })
})

router.post('/create', async (req, res) => {
    
    if (!req.body.type) {
        return res.status(400).send({ message: 'Kategoriyani type bo`sh' })
    }

    const { type } = req.body

    try {
        const category = new Category({
            type
        })

        await category.save(category)
        res.json(category)

    } catch (error) {
        console.log(error);
    }

})

module.exports = router