const express = require("express")
const app = express()

app.use(express.json())

app.use("/courses", require("./routes/courses"))
app.use("/students", require("./routes/students"))

app.use((error, request, response, next){
    console.error(error.message)
    response.sendStatus(500)
})

module.exports = app
