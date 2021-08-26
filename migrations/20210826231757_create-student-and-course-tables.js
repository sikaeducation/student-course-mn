exports.up = async (knex) => {
  await knex.schema.createTable("student", table => {
    table.increments()
    table.string("name")
  })  
  await knex.schema.createTable("course", table => {
    table.increments()
    table.string("title")
    table.integer("credits")
  })  
  await knex.schema.createTable("enrollment", table => {
    table.increments()
    table.datetime("date")
    table.integer("student_id").references("id").inTable("student").onDelete("CASCADE")
    table.integer("course_id").references("id").inTable("course").onDelete("CASCADE")
  })  
}

exports.down = async (knex) => {
  await dropTableIfExists("enrollment")
  await dropTableIfExists("student")
  await dropTableIfExists("course")
}
