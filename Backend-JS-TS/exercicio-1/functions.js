import fs from "node:fs"

export function createFile(texto){
    fs.writeFileSync("meuarquivo.txt",texto)
    console.log("Arquivo criado com sucesso")
}

export function updateFile(texto){
    fs.writeFileSync("meuarquivo.txt",texto)
    console.log("Arquivo atualizado com sucesso")
}

export function showFile(){
    const data = fs.readFileSync("meuarquivo.txt", "utf-8")
    console.log(data)
}

export function deleteFile(){
    fs.unlinkSync("meuarquivo.txt")
    console.log(`O arquivo foi deletado com sucesso`)
}