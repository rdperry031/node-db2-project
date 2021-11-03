exports.up = async function (knex) {
  await knex.schema.createTable('cars', table => {
    table.increments()
    table.text('vin').unique().notNullable()
    table.text('make').notNullable()
    table.text('model').notNullable()
    table.integer('mileage').notNullable()
    table.text('title')
    table.text('transmission')
  })
}; 

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars')
};


// | field        | data type        | metadata                                            |
// | ------------ | ---------------- | --------------------------------------------------- |
// | id           | unsigned integer | primary key, auto-increments, generated by database |
// | vin          | string           | required, unique                                    |
// | make         | string           | required                                            |
// | model        | string           | required                                            |
// | mileage      | numeric          | required                                            |
// | title        | string           | optional                                            |
// | transmission | string           | optional                                            |