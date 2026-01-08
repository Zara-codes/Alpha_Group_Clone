import express from "express"
import dotenv from ""

const app = express()

const port = 4000

app.get('/', (req, res) => {
    res.send("Hello Sara!")
})

app.listen(port, () => {
    console.log(`The server is listening on ${port}`)
})