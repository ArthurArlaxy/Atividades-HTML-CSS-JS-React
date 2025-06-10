const fs = require("node:fs")


fs.readFile("./text.txt", "utf-8", (err,data) =>{
    if (err) return console.log(`Houve um erro ao tentar ler o arquivo, ${err.message}`)
    console.log(data)
})
