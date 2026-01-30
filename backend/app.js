require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const authRoute = require("./routes/authRoute")
const dashboardRoute = require('./routes/dashboardRoute')
const uploadRoute = require('./routes/uploadRoute')
const historyRoute = require('./routes/historyRoute')

const app = express()
const { MONGO_URL, PORT, FRONTEND_URL } = process.env


main()
  .then(() => {
      console.log("database connected successfully!");
      app.listen(PORT, () => {
      console.log(`listening at port: ${PORT}`);
    })
  })
  .catch((e) => {
    console.log("some error occured: ",e)
  })

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
app.use('/', dashboardRoute)
app.use("/", uploadRoute)
app.use('/', historyRoute)

app.use((err, req, res, next) => {
  let {status=500, message='something went wrong'} = err
  console.log(err);
  res.json({message: message, status: status})
})