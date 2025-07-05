const express = require('express')
const path = require('node:path')
const router = require('./routes')

// Configuração do servidor
const app = express()

// Congigurações EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Configuração do body do formulário
app.use(express.urlencoded({ extended:true }))

// Configuração das rotas
app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Servidor rodando com sucesso!\nLink: http://localhost:${PORT} `))