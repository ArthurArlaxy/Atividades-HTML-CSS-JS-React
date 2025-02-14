const name = prompt('Qual é o seu nome: ')

let viagem = prompt('Você ja fez alguma viagem: (Sim/Não)')
let lugar = "nenhum"
let lugares = ""
let numeroViagens = 0

while (viagem === "Sim"){
    lugar = prompt('Para que lugar:')
    ++numeroViagens 
    lugares = lugares + " - " + lugar
    viagem = prompt('Você ja fez alguma outra viagem: (Sim/Não)')
}


let palavraviagem 

numeroViagens === 1? palavraviagem = "viagem" : palavraviagem = "viagens"

alert(`Então você, ${name},  teve ${numeroViagens} ${palavraviagem}\n
    Lugar(es) ${lugares}`)