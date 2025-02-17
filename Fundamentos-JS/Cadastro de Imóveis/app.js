const imoveis = [];
let imovel = {};
let option;
let showImoveis;

do{
    option = parseFloat(prompt(`Imóveis disponíveis: ${imoveis.length}
Que opção deseja escolher:
1- Visualizar imóveis disponíveis
2- Cadastrar imóveis
3- Sair`));
    switch (option){
        case 1:
            showImoveis = "";
            for(let i = 0; i < imoveis.length; i++){
                showImoveis += `${i + 1}º - Proprietário: ${imoveis[i].nomeProprietario}\n  quartos: ${imoveis[i].quartos}\n  Banheiros: ${imoveis[i].banheiros}\n  Garagem: ${imoveis[i].garagem}\n\n`;
            };
            alert(`Os imóveis cadastrados são :
${showImoveis}`);
            break;
        case 2:
            imovel = {};
            imovel.nomeProprietario = prompt('Digite o nome do proprietario:');
            imovel.quartos =prompt('Quantidade de quartos:');
            imovel.banheiros = prompt('Quantidade de banheiros:');
            imovel.garagem = prompt('Possui garagem:');
            imoveis.push(imovel);
            alert(`Imovel cadastrado`);
            break;
        case 3:
            alert('Encerrando o programa');
            break;
        default:
            alert(`Essa opção não existe`);
        }
} while (option !== 3 );