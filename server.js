const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes/userRoute')
const rescipeRouter = require('./routes/recipeRoute')

const app = express()
dotEnv.config()
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDb Connected")
})
.catch((e) => {
    console.log("Error: ", e)
})

app.use(bodyParser.json())
app.use(cors())
app.use('/api', router)
app.use('/api', rescipeRouter)

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server Running at: ${PORT}`)
})
