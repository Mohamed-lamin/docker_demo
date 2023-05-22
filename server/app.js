import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use("/", async (req, res) => {
  res.send("Hello, I am your server!")
})
app.listen(5000, () => {
  console.log("Server is running on port 5000")
})
