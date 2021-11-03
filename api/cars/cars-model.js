const db = require('../../data/db-config')

const getAll = () => {
return db('cars')
}

const getById = id => {
return db('cars').where('id', id).first()
}

const create = async car => {
  let [id] = await db('cars').insert(car)
  let newCar = await getById(id)
  return newCar
}

module.exports = {
  getAll,
  getById,
  create
}
