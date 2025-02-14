let medida = parseFloat(prompt('Digite o tamanho em metros:'))

const option = parseFloat(prompt(`Digite o número da opção:)
    1-Milimetros(mm)
    2-Centimetros(cm)
    3-Decímetro(dm)
    4-Decâmetro(dam)
    5-hectometro(hm)
    6-Quilometro(km)`))

let abreviacao = undefined

switch (option){
    case 1:
        medida *=1000
        abreviacao = 'mm'
        break
    case 2:
        medida *= 100
        abreviacao = 'cm'
        break
    case 3:
        medida *= 10
        abreviacao = 'dm'
        break
    case 4:
        medida /= 10
        abreviacao = 'dam'
        break
    case 5:
        medida /= 100
        abreviacao = 'hm'
        break
    case 6:
        medida /= 1000
        abreviacao = 'km'
        break
    default:
        alert('opção invalida')
}

if (option <= 6 && option > 0){
    alert(`O medida com a conversão selecionada é ${medida} ${abreviacao}`)
}