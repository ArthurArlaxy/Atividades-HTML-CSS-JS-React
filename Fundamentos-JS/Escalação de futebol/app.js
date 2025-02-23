function addPlayer(){
    const playerSection = document.getElementById('playerSection')
    const inputName = document.getElementById('name')
    const inputPosition = document.getElementById('position')
    const inputNumber = document.getElementById('number')

    let valueName = inputName.value
    let valuePosition = inputPosition.value
    let valueNumber = inputNumber.value 

    if (valueName === "" || valuePosition === "" || valueNumber == "" ){
        alert('Preencha todos os campos')
        return
    }

    const ul = document.createElement('ul')
    ul.id = valueNumber

    const namePlayer = document.createElement('li')
    namePlayer.innerText = valueName
    ul.appendChild(namePlayer)

    const playerPosition = document.createElement('li')
    playerPosition.innerText = valuePosition
    ul.appendChild(playerPosition)

    const playerNumber = document.createElement('li')
    playerNumber.innerText = valueNumber
    ul.appendChild(playerNumber)



    playerSection.appendChild(ul)
    inputName.value = ''
    inputPosition.value = ''
    inputNumber.value = ''
}
function removePlayer(){
    const inputPlayerRemove = document.getElementById('numberRemove')
    let valueOfPlayerRemove = inputPlayerRemove.value

    const playerToRemove = document.getElementById(valueOfPlayerRemove)

    if (!playerToRemove){
        alert('Jogador não encontrado')
        inputPlayerRemove.value = ''
        return
    } 

    const confirmation = confirm(`Deseja excluir O jogador número ${valueOfPlayerRemove}?`) 

    if (confirmation){
        playerSection.remove()
        inputPlayerRemove.value = ''
    } else {
        alert('Operação cancelada')
        inputPlayerRemove.value = ''
        return
    }
}