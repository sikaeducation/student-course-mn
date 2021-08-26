exports.seed = async (knex) => {
  await knex("enrollment").del()
  await knex("student").del()
  await knex("course").del()

  await knex("student").insert([{
    id: 1,
    name: "Miles",
  },{
    id: 2,
    name: "Duncan",
  }])

  await knex("course").insert([{
    id: 1,
    title: "Theory of Everything",
  },{
    id: 2,
    title: "Basic You",
  }])

  await knex("enrollment").insert([{
    date: "2021-09-01",
    student_id: 1,
    course_id: 1,
  },{
    date: "2021-09-02",
    student_id: 1,
    course_id: 2,
  },{
    date: "2021-09-03",
    student_id: 2,
    course_id: 2,
  }])
}
