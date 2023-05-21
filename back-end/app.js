const cors = require("cors")
const express = require("express")

const app = express()

app.use(cors())
app.use(express.json())

const flowersController = require("./controllers/flowerController")
app.use("/flowers", flowersController)


app.get("/", (req, res) => {
    res.status(200).send("This is the Landing Page for Le Boutique")
})

app.get("*", (req,res) => {
    res.status(404).send("This Page Does Not Exist :(")
})

module.exports = app;