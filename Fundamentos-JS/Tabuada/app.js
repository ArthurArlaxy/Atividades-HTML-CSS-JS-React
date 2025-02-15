let numeroParaTabuada = prompt('Digite o número para a tabuada:')
let resultado = ""

for (let i = 0; i <= 20; i++){
    resultado += `${numeroParaTabuada} * ${i} = ${numeroParaTabuada * i}\n`
}

alert(`A tabuada de ${numeroParaTabuada} é:
${resultado}`)