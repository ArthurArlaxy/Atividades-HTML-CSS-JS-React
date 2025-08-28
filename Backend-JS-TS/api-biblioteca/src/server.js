require('dotenv').config()
const express = require('express')
const authRouter = require('./routes/authRouter')
const app = express()

app.use(express.json())
app.use(authRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))