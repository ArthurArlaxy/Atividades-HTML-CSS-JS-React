const prompt = require('prompt-sync')();

const nome = prompt(`Digite seu nome: `)
console.log(`Olá ${nome} hoje é seu dia de sorte!!!`)

let carteira = 0
let carga = 0 

function recarga(){
    carga = parseFloat(prompt(`Que valor você deseja depositar?`))
    carteira += carga 
    console.log(`Você carregou R$${carga}. Aproveite!!`)
}

function aposta(){
    while (true){
        opcao = parseInt(prompt(`Hora de fazer a pipa voar. Vamos fazer a fézinha?
1. Sim
2. Não
opção: `))
        if (opcao === 1){
            let bet = parseFloat(prompt(`Valor da BET: R$: `))
            if (bet > carteira) {
                console.log(`Você está pobre, aposte um valor menor no começo!\n`)
                recarga()
            } else  {
                carteira -= bet
                console.log(`\nVocê apostou R$ ${bet}\n`)
                voar_pipa = prompt(`Aperte ENTER para fazer a pipa voar`)
                altura_pipa = Math.floor(Math.random()* 6)
                if (altura_pipa >= 4){
                    console.log(`\nVocê ganhou!!! merda...`)
                    carteira += bet + (bet*0.5)
                    console.log(`\nSeu saldo é de ${carteira}`)
                } else {
                    console.log(`\nVocê perdeu, que pena!  HAHAHAHHAHAHA!!`)
                }
            }
        }else {
            console.log(`\nQueria roubar mais... QUER DIZER... TCHAUU VOLTE SEMPRE...por favor!\n`)
            break 
        }

    }
}

recarga()
opcao = 0
aposta()
