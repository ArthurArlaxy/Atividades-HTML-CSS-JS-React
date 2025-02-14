const firstCar = Number(prompt('Digite a velocidade do primeiro carro em km:'))
const secondCar = Number(prompt('Digite a velocidade do segundo carro em km:'))

if (firstCar > secondCar){
    alert('O primeiro carro é mais rápido')
}else if (firstCar < secondCar){
    alert('O segundo carro é mais rapido')
}else{
    alert('O dois carros estão na mesma velocidade')
}