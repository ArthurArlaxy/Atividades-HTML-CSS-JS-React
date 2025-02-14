let nome = prompt('Digite o seu primeiro nome:')
let sobrenome = prompt('Digite o seu sobrenome:')
let estudo = prompt('Qual é o seu campo de estudo:')
let anoDeNascimento = prompt('Digite o Ano do seu nascimento:')

let idade = 2025 - anoDeNascimento 

nome = nome + " " + sobrenome

console.log(`OI, ${nome}! Muito obrigado por realizar sua inscrição! Estudo: ${estudo}| Idade: ${idade}`)