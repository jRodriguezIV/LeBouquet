const app = require("./app")

require("dotenv").config()
const PORT = precess.env.PORT

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})