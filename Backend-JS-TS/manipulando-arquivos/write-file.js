const fs = require("node:fs")

try {
    fs.writeFileSync("./text.txt","Vai tomando, to doente!", "utf-8")
    console.log("Arquivo criado com sucesso")
} catch (error) {
    console.log(`Erro ao escrever o arquivo ${error.message}`)
}