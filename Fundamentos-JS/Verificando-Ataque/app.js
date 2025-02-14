const nameAttack = prompt('Digite o nome do ataque: ')
const powerAttack = parseFloat(prompt('Digite os pontos de poder do ataque: '))

const namePersonagemDefesa = prompt('Digite o nome do personagem que vai ser atingido: ')
let personagemvida = parseFloat(prompt(`Qual é o valor do ponto de vida de ${namePersonagemDefesa}`))
const personagemDefesa = parseFloat(prompt(`Qual é o valor do ponto de defesa de ${namePersonagemDefesa}`))
const personagemArmor = confirm('Ele possui escudo (ok para sim): )')
let dano = undefined

if(personagemDefesa >= powerAttack){
    dano = 0
} else {
    if (personagemArmor == false){
        dano = powerAttack - personagemDefesa 
    } else {
        dano = (powerAttack - personagemDefesa ) / 2
    }
}

personagemvida = personagemvida - dano 

alert(`O ataque ${nameAttack} causou ${dano} de dano.\nO ${namePersonagemDefesa} ficou com ${personagemvida} de vida`)