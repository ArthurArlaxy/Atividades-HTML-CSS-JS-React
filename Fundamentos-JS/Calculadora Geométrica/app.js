let option;
let area;
let lado;
let altura;

function areaRetangulo(lado = 0, altura = 0){
    area = lado * altura;
}

function areaQuadrado(lado){
    return areaRetangulo(lado, lado);
}

function areaTriangulo(base, altura){
    area = base * altura / 2
}

function areaTrapezio(baseMaior,baseMenor,altura){
    area = (baseMaior + baseMenor) * altura / 2
}

function areaCirculo(raio){
    area = 3.14 * raio**2
}

do{
    option = parseFloat(prompt(`Que opção você deseja:
1- área de quadrado
2- área de retangulo
3- área de triangulo
4- área de trapézio
5- área de círculo
6- Sair`));
    switch (option){
        case 1:
            lado = parseFloat(prompt('Digite o tamanho do base em cm:'));
            areaQuadrado(lado);
            alert(`A área do quadrado digitado é: ${area}`);
            break;
        case 2:
            lado = parseFloat(prompt('Digite o tamanho do base em cm:'));
            altura = parseFloat(prompt('Digite o tamanho do altura em cm:'));
            areaRetangulo(lado, altura);
            alert(`A área do Retangulo digitado é: ${area}`);
            break;
        case 3:
            base = parseFloat(prompt('Digite o tamanho do lbase em cm:'));
            altura = parseFloat(prompt('Digite o tamanho do altura em cm:'));
            areaTriangulo(base, altura)
            alert(`A área do Triangulo digitado é: ${area}`);
            break;
        case 4:
            baseMenor= parseFloat(prompt('Digite o tamanho do base menor em cm:'));
            baseMaior = parseFloat(prompt('Digite o tamanho do base maior em cm:'));
            altura = parseFloat(prompt('Digite o tamanho do altura em cm:'));
            areaTrapezio(baseMaior,baseMenor, altura)
            alert(`A área do Trapézio digitado é: ${area}`);
            break;
        case 5:
            raio = parseFloat(prompt('Digite o tamanho do raio em cm:'));
            areaCirculo(raio);
            alert(`A área do círculo digitado é: ${area}`);
            break;
        case 6:
            alert(`encerrando o programa`)
            break;
        default:
            alert(`Opção invalida`);
            break;
    };
}while(option !== 6);