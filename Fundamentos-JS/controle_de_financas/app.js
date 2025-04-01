const form= document.getElementById('post')
const amount = document.getElementById('amount')
let money

const formarter = Intl.NumberFormat('pt-BR',{
    compactDisplay: 'long',
    currency:'BRL',
    style:'currency'
})

async function renderTranfers(newTransfer){
    const transfer = document.querySelector('#transfer')

    const description = document.createElement('h3')
    description.classList.add('description')
    description.textContent = newTransfer.description

    const value = document.createElement('p')
    if (parseFloat(newTransfer.value) > 0){
        value.classList.add('credit')
    }else{
        value.classList.add('debit')
    }

    value.textContent = `${formarter.format(newTransfer.value)}`

    const editBtn =  document.createElement('button')
    editBtn.classList.add('editBtn')
    editBtn.textContent = 'Editar'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('deleteBtn')
    deleteBtn.textContent = 'X'

    const div = document.createElement('div')
    div.classList.add('transfer')
    div.id = `div-${newTransfer.id}`

    deleteBtn.addEventListener('click', async () =>{
        const deleteTransfer = newTransfer.id
        await fetch(`http://localhost:3000/finanças/${deleteTransfer}`,{method:'DELETE'})
        deleteBtn.parentElement.remove()
        await showAmount()
    })

    editBtn.addEventListener('click', () =>{
        document.getElementById('id').value = newTransfer.id
        document.getElementById('description').value = newTransfer.description
        document.getElementById('value').value = parseFloat(newTransfer.value)
    })

    div.append(description,value,editBtn,deleteBtn)
    transfer.append(div)
}


async function showAmount(){
    money = 0
    const response = await fetch('http://localhost:3000/finanças')
    const transfers = await response.json()

    transfers.forEach(transfer =>{
        money += parseFloat(transfer.value)
    })

    amount.innerHTML = `Saldo: <span>${formarter.format(money)}</span>`
    const span = document.querySelector('span')

    span.classList.remove('positive', 'negative');
    span.classList.add(money > 0 ? 'positive' : 'negative');    
}


async function getTransfer() {
    const response = await fetch('http://localhost:3000/finanças')
    const transfers = await response.json()


    transfers.forEach(renderTranfers)
}

document.addEventListener('DOMContentLoaded', async () => {
    await getTransfer()
    await showAmount()
})



form.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    try{
        id =  document.getElementById('id').value
        const newTransferData = {
            description: document.getElementById('description').value,
            value: parseFloat(document.getElementById('value').value)
        }

        if(!newTransferData.value || isNaN(newTransferData.value) || !newTransferData.description){
            throw new Error('Os valores não estão preenchidos corretamente')
        }
        
        if (id){
            await editTransfer()
            document.getElementById('id').value = ''
            form.reset()
        }else{
            const response = await fetch('http://localhost:3000/finanças', {
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(newTransferData)
            })
            const newTransfer = await response.json()
            renderTranfers(newTransfer)
            form.reset()
            document.getElementById('id').value = ''
            await showAmount()
        }
    }
    catch (erro){
        alert(erro.message)
    }
})


function deleteDOMTransfer(code){
    const div = document.getElementById(`div-${code}`)

    div.remove()
}

async function editTransfer() {
    const inputToEditTransfer = {
        id: document.getElementById('id').value,
        description: document.getElementById('description').value,
        value: parseFloat(document.getElementById('value').value)
    }

    const response = await fetch(`http://localhost:3000/finanças/${inputToEditTransfer.id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(inputToEditTransfer)
    })

    const editedTransfer = await response.json()
    deleteDOMTransfer(inputToEditTransfer.id)
    renderTranfers(editedTransfer)
    await showAmount()
}
