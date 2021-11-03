const router = require('express').Router()
const Cars = require('./cars-model')

router.get('/', async (req, res) => {
    try{
        const cars = await Cars.getAll()
        res.status(200).json(cars)
    }catch(err){
        res.status(500).json(err.message)
    }
})



module.exports = router