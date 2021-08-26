const express = require("express")
const router = express.Router()

router.get("/", (request, response) => {
  if (request.query.includeStudents){

  }
})

router.get("/:id/students", (request, response) => {
})

router.get("/:id", (request, response) => {
})

router.post("/", (request, response) => {
})

router.put("/:id", (request, response) => {
})

router.patch("/:id", (request, response) => {
})

router.delete("/:id", (request, response) => {
})

module.exports = router
