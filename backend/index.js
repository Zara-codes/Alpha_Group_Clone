import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
)

app.use(express.json())


const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send("Hello Sara!")
})

app.listen(port, () => {
    console.log(`The server is listening on ${port}`)
})