const Cars = require('./cars-model')
const vinValidator = require('vin-validator')

const checkCarId = async (req, res, next) => {
  try{
    const car = await Cars.getById(req.params.id)
    if(!car){
      next({ status:404, message: `Car with id ${req.params.id} not found`})
    }else{
      req.car = car
      next()
    } 
  }catch(err){
    next(err)
  }
}

const checkCarPayload = async (req, res, next) => {
  try{
    const { vin, make, model, mileage } = req.body
    if (!vin){
      next({ status: 400, message: 'vin is missing'})
    }else if(!make){
      next({ status: 400, message: 'make is missing'})
    }else if(!model){
      next({ status: 400, message: 'model is missing'})
    }else if(!mileage){
      next({ status: 400, message: 'mileage is missing'})
    }else{
      next()
    }
  }catch(err){
    next(err)
  }
}

const checkVinNumberValid = async (req, res, next) => {
  try{
    const valid = await vinValidator.validate(req.body.vin)
    if(!valid){
      next({ status: 400, message: 'vin abc is invalid'})
    }else{
      next()
    }
  }catch(err){
    next(err)
  }
}

const checkVinNumberUnique = async (req, res, next) => {
try{
  const existingVin = await Cars.getByVin(req.body.vin)
  if(!existingVin){
    next()
  }else{
    next({ status: 400, message: `vin ${req.body.vin} already exists`})
  }
}catch(err){
  next(err)
}

}
 
module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}