const path = require("node:path")

const dir = "src"
const file = "app.js"

const fullPath = path.join(__dirname, dir , file)
console.log(fullPath)

const relativePath = "../arquivos/ralatório.pdf"

const absolutePath = path.resolve(__dirname, relativePath)
console.log(absolutePath)

const fileName = path.basename(relativePath)
console.log(fileName)

const ext = path.extname(absolutePath)
console.log(ext)