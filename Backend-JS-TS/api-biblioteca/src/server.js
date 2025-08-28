require('dotenv').config()
const express = require('express')
const authRouter = require('./routes/authRouter')
const errorMiddleware = require('./middleware/errorMiddleware')
const apiRouter = require('./routes/apiRouter')
const app = express()

app.use(express.json())
app.use(authRouter)
app.use(apiRouter)
app.use(errorMiddleware)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))