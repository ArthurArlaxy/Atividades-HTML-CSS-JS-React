const pilhaDeCartas = [[1,'Vermelho'], [7,'Azul']]
let option;
let card = [];

do{
    option = parseFloat(prompt(`A quantidade de cartas na pilha são: ${pilhaDeCartas.length}
Escolha a opção:
1 - Adicionar uma carta
2 - Puxar uma carta
3- Sair`))
    switch (option){
        case 1:
            number = parseFloat(prompt('Digite o número da carta:'))
            color = prompt('Digite a cor da carta:')
            card.push(number,color)
            pilhaDeCartas.push(card)
            alert(`A carta ${card} foi adicionada!`)
            card = []
            break
        case 2:
            card = pilhaDeCartas.pop()
            if(card){
                alert(`A carta ${card} foi removida do baralho!`)
            } else{
                alert('Não tem cartas no Baralho')
            }
            card = []
            break
        case 3:
            break
        default:
            alert(`A opção ${option} não existe!`)
    }
}while (option !== 3)