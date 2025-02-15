const palavra = prompt('Digite uma palavra: ')
let verificarPalindromo = ""
const inicializador = (palavra.length - 1)

for (let i = inicializador; i >= 0; i--){
    verificarPalindromo += palavra[i]
}

if (palavra === verificarPalindromo){
    alert(`${palavra} é um Palindromo`)
} else{
    alert(`${palavra} não é um Palindromo e de trás pra frente fica assim: ${verificarPalindromo}`)
}

