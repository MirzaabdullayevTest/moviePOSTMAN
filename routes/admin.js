const { Router } = require('express')
const router = Router()
const Admin = require('../models/admin')

router.get('/', (req, res) => {
    res.send({
        message: 'Adminga kirdik'
    })
})

router.post('/create', async (req, res) => {
    if (!req.body.password.length < 6)
        return res.status(400).send({ message: 'Parol uzunligi 6 tadan kam bo`lishi mumkin emas' })

    const { name, password, email, role } = req.body

    try {
        const admin = new Admin({
            name, password, email, role
        })

        await admin.save(admin)
        res.json(admin)

    } catch (error) {
        console.log(error);
    }

})

module.exports = router