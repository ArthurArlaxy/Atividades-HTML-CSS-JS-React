const readLine = require("node:readline")
const rl = readLine.createInterface({ input: process.stdin, output: process.stdout })

// rl.question("Qual é o seu nome? ", (answer) =>{
//     rl.write(`Olá, ${answer}!`)
//     rl.close()
// })

// rl.once("close", ()=>{
//     rl.write("Saindo...")
//     process.exit(0)
// })

rl.on("SIGINT", () =>{
    rl.question("Deseja mesmo sair? ", (answer) =>{
        if (answer.trim().toUpperCase() === "S"){
            process.exit(0)
        }else {
            rl.write("Você decidiu continuar!!")
        }
    })
})