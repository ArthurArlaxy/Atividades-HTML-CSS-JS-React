let option;

do{
    option = parseFloat(prompt(`Deseja selecionar qual opção:
        1
        2
        3
        4
        5 - encerrar`));
    switch (option){
        case 1:
            alert('Você escolheu a opção 1');
            break;
        case 2:
            alert('Você escolheu a opção 2');
            break;
        case 3:
            alert('Você escolheu a opção 3');
            break;
        case 4:
            alert('Você escolheu a opção 4');
            break;
        case 5:
            alert('encerrando');
            break;
        default:
            alert('Essa opção não existe!');
    }
} while (option !== 5);