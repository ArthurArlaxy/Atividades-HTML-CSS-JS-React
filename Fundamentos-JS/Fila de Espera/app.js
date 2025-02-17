let pacientes = [];
let option;
let name;

do{
    let pacientesList = ""
    for(let i = 0; i < pacientes.length; i++){
        pacientesList += `${(i+1)}º - ${pacientes[i]}\n`
    }

    option = parseFloat(prompt(`Pacientes na fila:\n${pacientesList}
Digite a opção:
1- Novo Paciente
2- Consultar paciente
3- Sair`))
    switch(option){
        case 1:
            name = prompt('Qual é o nome do paciente')
            pacientes.push(name)
            alert(`A consulta de ${name} foi agendada`)
            break
        case 2:
            name = pacientes.shift()
            if (name){
                alert(`A consulta de ${name} foi consultado`)
            } else{
                alert('Não há passientes na fila')
            }

            break
        case 3:
            alert('Encerrando o sistema')
            break
        default:
            alert('Opção invalida')
    }
} while (option !== 3)