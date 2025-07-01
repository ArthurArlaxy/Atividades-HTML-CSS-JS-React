const express = require('express')
const path = require('node:path')
const fs = require('node:fs')

const app = express()
const PORT = 3000

const dataUsers = fs.readFileSync(path.join(__dirname,'db','banco-de-dados.txt'),'utf-8')

const storedUsers = []
if (dataUsers) { storedUsers.push(...JSON.parse(dataUsers)) }

// configurando ejs
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))

// configurando form no express
app.use(express.urlencoded({ extended:true }))

app.get("/", (req, res) => {
    const title = 'Homepage'
    const message = "Esse trecho foi criado com EJS e Espress"
    res.render('index', {title,message})
})

app.get('/formulario', (req, res) => {
    res.render('form')
})

app.post('/registro', (req, res) => {
    
    const username = req.body.username
    const password = req.body.password

    storedUsers.push({ username, password })
    fs.writeFileSync(path.join(__dirname,'db','banco-de-dados.txt'),JSON.stringify(storedUsers,null,2))
    res.redirect('/usuarios')
})

app.get('/usuarios', (req, res) => {
    res.render('users',{ users:storedUsers})
})

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta http://localhost:${PORT}/`)
})