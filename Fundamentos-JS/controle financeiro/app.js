let dinheiro;
let operacao;
let valor = 0

dinheiro = parseFloat(prompt('Digite o seu saldo atual:'));

do{
    option = parseFloat(prompt(`Seu valor atual é ${dinheiro}
        Digite a opção:
        1-recebimento
        2-pagamento
        3-encerrar`));
    switch (option){
        case 1:
            valor = parseFloat(prompt('Digite o valor recebido:'))
            dinheiro += valor
            break
        case 2:
            valor = parseFloat(prompt('Digite o valor à pagar'))
            dinheiro -= valor
            break
        case 3:
            break
    }
}while (option !== 3)