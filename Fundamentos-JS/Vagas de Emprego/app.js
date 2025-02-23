let option;
let vagas = [];
let vaga ;
let mostrarvagas = "";



function listarVagas(vagas){
    mostrarvagas = ""
    for (let i = 0; i < vagas.length; i++){
        mostrarvagas += `${i + 1}º Vaga:\nNome: ${vagas[i].nome}\nInscritos: ${vagas[i].inscritos}\n\n`
    } if (mostrarvagas !== ""){
        return mostrarvagas
    } else{
        return mostrarvagas = "Não possui vagas"
    }
}

function criarVaga(){
    let nome = prompt('Digite o nome da Vaga:')
    let descricao = prompt('Digite uma descrição para a vaga:')
    let dia = parseFloat(prompt('Digite o dia para a data limite:'))
    let mes = parseFloat(prompt('Digite o mes para a data limite:')) - 1
    let ano = parseFloat(prompt('Digite o ano para a data limite:'))
    let dataLimite = new Date(ano, mes, dia)
    vaga = {
        nome,
        descricao,
        dataLimite,
        inscritos: 0,
        candidatos: []
    }
    let confirmacao = confirm(`Deseja confirmar a vaga:\n\nNome: ${vaga.nome}\nDescricao: ${vaga.descricao}\nData limite: ${vaga.dataLimite}`)
    if (confirmacao === true){
        vagas.push(vaga)
        alert('A vaga foi Adicionada')
    } else {
        alert('Vaga Cancelada...')
    }
}

function visualizarVaga(){
    listarVagas(vagas)
    let choose = parseFloat(prompt(`Digite o valor da vaga que seseja visualizar:\n\n${mostrarvagas} `))
    if (choose <= vagas.length && choose >= 1){
        vaga = vagas[choose - 1]
        alert(`Aqui está:\n\nNome: ${vaga.nome}\nDescricao: ${vaga.descricao}\nData limite: ${vaga.dataLimite}\nInscritos: ${vaga.inscritos}\nCandidatos: ${vaga.candidatos}`)
    } else {
        alert('Incice invalido')
    }
}

function inscricao(){
    listarVagas(vagas)
    nomeCandidato = prompt('Digite o nome do candidato:')
    indice = parseFloat(prompt(`Escolha é o indice da vaga:\n\n${mostrarvagas}`))
    if (indice <= vagas.length && indice >= 1){
        vaga = vagas[indice - 1]
        let confirmacao = confirm(`Deseja confirmar a inscrição:\n\nNome: ${vaga.nome}\nDescricao: ${vaga.descricao}\nData limite: ${vaga.dataLimite}`)
        if (confirmacao === true){
            vaga.candidatos.push(nomeCandidato)
            vaga.inscritos++
            alert('A inscrição foi finalizada')
        } else {
            alert('Inscrição Cancelada...')
        }
    } else {
        alert('Incice invalido')
    }
}

function deletarVaga(){
    listarVagas(vagas)
    indice = parseFloat(prompt(`Escolha é o indice da vaga que deseja Deletar:\n\n${mostrarvagas}`))
    if (indice <= vagas.length && indice >= 1){
        vaga = vagas[indice - 1]
        let confirmacao = confirm(`Deseja DELETAR a vaga:\n\nNome: ${vaga.nome}\nDescricao: ${vaga.descricao}\nData limite: ${vaga.dataLimite}`)
        if (confirmacao === true){
            vagas.splice(indice -1, 1)
            alert('A vaga foi deletada')
        } else {
            alert('Operação Cancelada...')
        }
    } else {
        alert('Incice invalido')
    }
}

function exibirMenu(){
    do{
        option = parseFloat(prompt(`Digite a opção que deseja:
    1- Listar vagas disponíveis
    2- Criar uma nova vaga
    3- Visualizar vaga
    4- Inscrever candidato em uma vaga
    5- Excluir uma vaga
    6- Sair`))
        switch (option){
            case 1:
                listarVagas(vagas)
                alert(`As vagas disponíveis são:\n\n${mostrarvagas}`)
                break
            case 2:
                criarVaga()
                break
            case 3:
                if (vagas.length !== 0){
                    visualizarVaga()
                } else{
                    alert('Não temos vagas')
                }
                break
            case 4:
                if (vagas.length !== 0){
                    inscricao()
                } else{
                    alert('Não temos vagas')
                }
                break
            case 5:
                if (vagas.length !== 0){
                    deletarVaga()
                } else{
                    alert('Não temos vagas')
                }
                break
            case 6:
                alert('Encerrando')
                break
            default:
                alert('Essa opção é invalida')
        }
    }while (option !== 6)
}

exibirMenu()