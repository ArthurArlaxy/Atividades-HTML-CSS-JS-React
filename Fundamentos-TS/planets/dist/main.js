let planets = [];
class Planet {
    name;
    coordenada;
    situacao;
    satelites;
    constructor(name, coordenada, situacao) {
        this.name = name;
        this.coordenada = coordenada;
        this.situacao = situacao;
        this.satelites = [];
    }
}
function createPlanet() {
    const name = prompt('Digite o nome do planeta: ');
    const coordenadaStr = prompt(`Digite a coordenada [numbers-numbers-numbers-numbers]:`);
    const coordenadaVerification = coordenadaStr.replace(/[\sA-Za-z]/g, '');
    const coordenadaList = coordenadaVerification.split('-');
    const coordenada = coordenadaList.map(coo => Number(coo));
    const situacaoInput = prompt(`Digite a situação do planeta:
        habitado,
        habitavel,
        inabitavel,
        inexplorado`);
    if (!name) {
        return alert('Insira um nome!');
    }
    if (!coordenadaStr) {
        return alert('Coordenada invalida!');
    }
    const situacoesValidas = ["habitado", "habitavel", "inabitavel", "inexplorado"];
    if (!situacaoInput || !situacoesValidas.includes(situacaoInput)) {
        return alert('Situação inválida! Escolha entre: habitado, habitavel, inabitavel, inexplorado.');
    }
    let newplanet = new Planet(name, [coordenada[0], coordenada[1], coordenada[2], coordenada[3]], situacaoInput);
    planets.push(newplanet);
    alert(`O planeta ${newplanet.name} foi adicionado com sucesso`);
}
function getPlanet(name) {
    const planet = planets.find(p => p.name === name);
    return planet;
}
function alterSituation() {
    const planetName = prompt('Que planeta deseja alterar a situação:');
    const planet = getPlanet(planetName);
    const situacaoInput = prompt(`Digite a situação do planeta:
        habitado,
        habitavel,
        inabitavel,
        inexplorado`);
    const situacaoValidas = ['habitado', 'habitavel', 'inabitavel', 'inexplorado'];
    if (!situacaoInput || !situacaoValidas.includes(situacaoInput)) {
        return alert('Situação inválida! Escolha entre: habitado, habitavel, inabitavel, inexplorado.');
    }
    planet.situacao = situacaoInput;
    alert(`A situação alterada com sucesso`);
}
function AddSatelite() {
    const planetName = prompt('Que planeta deseja adicionar um satélite:');
    const planet = getPlanet(planetName);
    const sateliteInput = prompt(`Diite o nome do satélite`);
    if (!sateliteInput || !planetName) {
        return alert('Escreva o nome do satélite');
    }
    planet.satelites.push(sateliteInput);
    alert(`O satélite ${sateliteInput}, foi adicionado do planeta ${planet.name}!!`);
}
function removeSatelite() {
    const planetName = prompt('Que planeta deseja remover um satélite:');
    const planet = getPlanet(planetName);
    const sateliteInput = prompt(`Digite o nome do satélite`);
    const sateliteIndex = planet.satelites.indexOf(sateliteInput);
    if (!sateliteInput || !planetName) {
        return alert('Escreva o nome inválido');
    }
    if (sateliteIndex === -1)
        return alert('Satélite não encontrado');
    planet.satelites.splice(sateliteIndex, 1);
    alert(`O satélite ${sateliteInput}, foi removido do planeta ${planet.name}!!`);
}
function showPlanets() {
    let text = 'Listagem de planetas:\n\n';
    planets.forEach(planet => {
        text += `name: ${planet.name}\ncoordenada: ${planet.coordenada}\nsituacao: ${planet.situacao}\nsatelites: ${planet.satelites}\n\n`;
    });
    alert(text);
}
while (true) {
    const option = parseFloat(prompt(`O que deseja fazer: 
        1 - criar planeta
        2 - Mudar Situação
        3 - Adicionar satélite
        4 - Remover satélite
        5 - Visualizar planetas
        6 - Sair `));
    switch (option) {
        case 1:
            createPlanet();
            break;
        case 2:
            alterSituation();
            break;
        case 3:
            AddSatelite();
            break;
        case 4:
            removeSatelite();
            break;
        case 5:
            showPlanets();
            break;
        case 6:
            alert('Saindo...');
            break;
        default:
            alert('Opção Inválida');
    }
    if (option === 6) {
        break;
    }
}
