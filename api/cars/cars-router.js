const router = require('express').Router()
const Cars = require('./cars-model')
const {
    checkCarId
} = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    try{
        const cars = await Cars.getAll()
        res.status(200).json(cars)
    }catch(err){
        next(err)
    }
})

router.get('/:id', checkCarId, async (req, res, next) => {
    res.status(200).json(req.car)
   
})

router.use(( err, req, res, next ) =>{
    res.status(err.status || 500).json({
      message: err.message,
    })
  })
  
module.exports = router