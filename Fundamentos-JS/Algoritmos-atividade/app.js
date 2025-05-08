const mediaAritmetica = (...numbers) =>{
    let sum = numbers.reduce((accum,sum)=> accum + sum, 0)
    let media  = sum / numbers.length
    return media
}

const mediana = (...numbers) =>{
    if (numbers.length % 2 !== 0){
        let sortedNumbers = [...numbers].sort((a,b) => a-b)
        return sortedNumbers[Math.floor(sortedNumbers.length / 2 )]
    } 
    
    if (numbers.length % 2 === 0){
        let sortedNumbers = [...numbers].sort((a,b) => a-b)
        return (sortedNumbers[Math.floor(sortedNumbers.length / 2 )] + sortedNumbers[Math.floor(sortedNumbers.length / 2 - 1 )]) /2
    } 
}

const mediaPonderada = (numbers, pesos) =>{

    if (numbers.length !== pesos.length || numbers.length === 0){
        return alert('Precisa indicar o peso e o número')
    }
    sumNumbers = 0
    sumPeso = 0

    for (let i = 0; i < numbers.length; i++){
        sumNumbers += numbers[i] * pesos[i]
        sumPeso += pesos[i]
    }

    return parseFloat(sumNumbers / sumPeso)
}


const mediaPonderada2 = (...entries) =>{
    const sum = entries.reduce((accum, {number, weight}) => accum + (number * (weight ?? 1)),0)
    const sumWeight = entries.reduce((accum, entry)=> accum + (entry.weight ?? 1),0)
    return sum / sumWeight
}

const moda = (...numbers) => {
    let frequency = {}
    let maxfrequency = 0
    let moda = []

    numbers.forEach(number =>{
        frequency[number] = (frequency[number] || 0) + 1
        if (frequency[number] > maxfrequency){
            maxfrequency = frequency[number]
            moda = [number]
        } else if (frequency[number]=== maxfrequency){
            moda.push(number)
        }
    })
    return moda
}

console.log(mediaAritmetica(1, 2, 10, 20, 0))
console.log(mediana(1, 2, 10, 20, 0))
console.log(mediana(1, 11, 10, 20, 0, 4))
console?.log(mediaPonderada([10,4,5,4],[3,2,1,6]))
console.log(moda(1,4,5,6,2,4,5,6,4,5,5))

console?.log(mediaPonderada2(
    {number:10, weight:3},
    {number:4, weight:2},
    {number:5, weight:1},
    {number:4, weight:6}
))
