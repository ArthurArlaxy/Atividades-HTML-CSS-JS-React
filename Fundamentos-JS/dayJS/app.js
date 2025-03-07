const prompt = require('prompt-sync')()
const dayjs = require('dayjs')
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat)

let dataDeNascimento = prompt('Insira a data de nascimento (DD-MM-YYYY): ')
let now = dayjs()
dataDeNascimento = dayjs(dataDeNascimento, "DD-MM-YYYY")

let idade = now.diff(dataDeNascimento,"year")
let nextBirthday = dataDeNascimento.add(idade + 1,"year")
let numbersOfDays = nextBirthday.diff(now,"day") + 1

now = now.format("DD-MM-YYYY")
dataDeNascimento = dataDeNascimento.format("DD-MM-YYYY")
nextBirthday = nextBirthday.format('DD-MM-YYYY')


// Exibe as informações
console.log('Data de nascimento: ' + dataDeNascimento )
console.log(`Hoje é dia: ${now}`)
console.log(`Você possui ${idade} anos`)
console.log(`Seu proximo aniversário será em ${nextBirthday}`)
console.log(`Seu proximo aniversário será em ${numbersOfDays} dias`)
