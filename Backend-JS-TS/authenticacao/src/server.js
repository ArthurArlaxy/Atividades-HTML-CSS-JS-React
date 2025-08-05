const express = require('express')
const path = require('node:path')
const session = require('express-session')
const router = require('./routes')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended:true }))

app.use(session({
    secret:'secret-key',
    resave:false,
    saveUninitialized:true,
    cookie:{ secure:false }
}))

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Servidor Rodando. http://localhost:${PORT}`))