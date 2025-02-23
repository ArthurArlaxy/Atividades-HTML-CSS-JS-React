function addContact(){
    const contactSection = document.getElementById('contacts-list')

    const titulo = document.createElement('h2')
    titulo.innerText = "Contato"

    const ul = document.createElement('ul')

    const nameLi = document.createElement('li')
    nameLi.innerText = "Nome: "
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'name'
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)

    
    const phoneLi = document.createElement('li')
    phoneLi.innerText = "Telefone: "
    const phoneInput = document.createElement('input')
    phoneInput.type = "text"
    phoneInput.name = 'phone'
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)

    const addressLi = document.createElement('li')
    addressLi.innerHTML = '<label for="address">Endereço: </label>'
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    
    contactSection.append(titulo, ul)
}

function removeContact(){
    const contactSection = document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h2')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}