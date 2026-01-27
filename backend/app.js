require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const authRoute = require("./routes/authRoute")

const app = express()
const { MONGO_URL, PORT, FRONTEND_URL } = process.env


main()
  .then(() => {
      console.log("database connected successfully!");
      app.listen(PORT, () => {
      console.log(`listening at port: ${PORT}`);
    })
  })
  .catch((e) => console.log("some error occured: ",e))

async function main() {
  await mongoose.connect(MONGO_URL)
}

app.use(cors({
  origin: FRONTEND_URL,
  method: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}))
app.use(cookieParser())
app.use(express.json())

app.use("/", authRoute)

app.get("/", (req, res) => {
  res.send("root path.")
})
