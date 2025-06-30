const fs = require("node:fs")
const path = require("node:path")
const readline = require("node:readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function userInteraction(text){
    return new Promise((resolve) => {
        rl.question(text,(answer) =>{
            const input = answer ? answer : "Default"
            resolve(input)
    })
})}

async function createNote(){
    const title = await userInteraction("Qual é o Título da sua anotação: ")
    const text = await userInteraction("Escreva sua anotação: ")
    fs.writeFileSync(path.resolve("notes",`${title}.txt`),text,"utf-8")
    console.log("Anotação salva com sucesso")
}


const notesDir = path.resolve("notes")
async function listDir(){
    const files = fs.readdirSync(notesDir)
    console.log("-------- Lista de Arquivos --------")
    files.forEach((file,position)=>{
        console.log(`${position + 1} - ${file}`)
    })
    console.log("-----------------------------------")
}

async function readNote(){
    await listDir()
    const fileNumber = parseInt(await userInteraction("Qual é o id da anotação que deseja ver: "))
    const file = fs.readdirSync(notesDir)[fileNumber-1]
    let data = fs.readFileSync(path.resolve("notes",file),"utf-8")
    console.log("\n-------- Conteúdo da Anotação --------");
    console.log(data);
    console.log("--------------------------------------");
}

async function deleteNote() {
    await listDir()
    const fileNumber = parseInt(await userInteraction("Qual é o id da anotação que deseja deletar: "))
    const files = fs.readdirSync(notesDir)
    const file = files[fileNumber-1]

    if (!file) return console.log("Esse id é inválido")

    fs.unlinkSync(path.resolve(notesDir,file))
    console.log("Anotação deletada!")
}


async function main() {
    let option = 0
    while (option != 4){
        console.log("\n-------- Anotation APP 1.0 --------");
        let option = parseInt(await userInteraction("\n1 - Criar anotação\n2 - Vizualizar anotação\n3 - Deletar anotação\n4 - Sair\nQual opção você deseja: "))
        console.log("\n--------------------------------------");
        switch (option){
            case 1:
                await createNote()
                break
            case 2:
                await readNote()
                break
            case 3:
                await deleteNote()
                break
            case 4:
                rl.close()
                process.exit(0)
            default:
                console.log("Opção Inválida")
        }
    }
}

main()