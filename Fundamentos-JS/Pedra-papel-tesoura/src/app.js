import "./styles/style.css"

const buttonsGame = document.getElementsByClassName("btn-game")
const divText = document.getElementById('mesage')
let choose 
const pecas = ["🪨","📃","✂️"]

Array.from(buttonsGame).forEach((button) => {
    button.addEventListener('click', (ev) => {
        choose = parseFloat(ev.target.value)
        console.log(choose)
        battle()
    })
});

function maquina(){
    let jogada = Math.floor(Math.random()*3)
    return jogada
}

function battle(){  
    let h3 = document.createElement('h3')
    let p = document.createElement("p")

    let jogada = maquina()
    
    if (choose === jogada){
        h3.innerText = `Empate! Os dois fizeram a mesma jogada`
    }

    if ((choose === 0 &&  jogada === 1)|| (choose === 1 &&  jogada === 2)|| (choose === 2 &&  jogada === 0)){
        h3.innerText = `Você foi derrotado!`
    }

    if ((choose === 1 &&  jogada === 0)|| (choose === 2 &&  jogada === 1)|| (choose === 0 &&  jogada === 2)){
        h3.innerText = `Você saiu Vitorioso!`
    }

    divText.innerHTML = ''
    p.innerText = `Sua jogada foi ${pecas[choose]} e a do computador ${pecas[jogada]}`
    divText.append(p,h3)
}  

