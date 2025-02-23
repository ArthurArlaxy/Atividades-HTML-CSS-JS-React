const button = document.getElementById('tech')
let contador = 0

button.addEventListener('click', function (){
    contador++
    const input = document.createElement('input')
    input.type = 'text'
    input.name = 'tech'+ contador
    input.id = 'tech'
    
    const label = document.createElement('label')
    label.htmlFor = 'tech' + contador
    label.innerText = '\n\n\nTecnologia: '

    const inputRadio = document.createElement('input')
    inputRadio.type = 'radio'
    inputRadio.name = 'radio'+ contador
    inputRadio.id = 'radio1' + contador
    inputRadio.value = "0-2 Anos"

    const label2 = document.createElement('label')
    label2.htmlFor = 'radio1'+ contador
    label2.innerText = '\n\n0-2 Anos '

    const inputRadio2 = document.createElement('input')
    inputRadio2.type = 'radio' 
    inputRadio2.name = 'radio'+ contador
    inputRadio2.id = 'radio2' + contador
    inputRadio2.value = "3-4 Anos"

    const label3 = document.createElement('label')
    label3.htmlFor = 'radio2' + contador
    label3.innerText = '\n\n3-4 Anos'

    const inputRadio3 = document.createElement('input')
    inputRadio3.type = 'radio'
    inputRadio3.name = 'radio'+ contador
    inputRadio3.id = 'radio3' + contador
    inputRadio3.value = "5+ anos"

    const label4 = document.createElement('label')
    label4.htmlFor = 'radio3' + contador
    label4.innerText = '\n\n5+ Anos'

    const removeTech = document.createElement('button')
    removeTech.innerText = "remover Tecnologia"

    const form = document.getElementsByTagName('form')[0]

    const div = document.createElement('div')
    div.className = 'div'

    removeTech.addEventListener('click', function (){
        div.remove()
    })

    div.append(label,input,label2,inputRadio,label3,inputRadio2, label4,inputRadio3,removeTech)

    form.append(div)
})

const getValue = document.getElementById('get')

getValue.addEventListener('click', function (){
    const valorInputs = document.getElementsByTagName('input')

    const name = valorInputs[0].value
    if (!name) {
        alert('Nome é obrigatório!');
        return;
    }

    const tecnologias = []
    let habilidade = []
    let tecnologia = ""
    let time = ""
    contador = 0

    let erro = false

    for (let i = 1; i < valorInputs.length; i++){
        if (valorInputs[i].type === 'text'){
            tecnologia = valorInputs[i].value
            contador = 0
            if (!tecnologia) {
                erro = true;
                alert('Tecnologia é obrigatória!');
            }

        }

        if (valorInputs[i].type === 'radio' && valorInputs[i].checked){
            time = valorInputs[i].value
        } else {
            contador++
        }
        

        if (tecnologia != "" && time !== ""){
            habilidade.push(tecnologia,time)
            tecnologias.push(habilidade)
            habilidade = []
            tecnologia = ""
            time = ""
            contador = 0
        }
    }

    if (tecnologias.length === 0) {
        alert('Adicione ao menos uma tecnologia e tempo!');
        return;
    }

    const dev = {
        name: name,
        tecnologias: tecnologias
    }

    console.log(dev)

    const div = document.querySelectorAll('.div')
    div.forEach(function (row) {
        row.remove()
    });
    valorInputs[0].value = ""
})

function switchTheme(){
    document.body.classList.toggle('lightTheme')
    document.body.classList.toggle('darkTheme')
}

document.getElementById('switchTheme').addEventListener('click', switchTheme)