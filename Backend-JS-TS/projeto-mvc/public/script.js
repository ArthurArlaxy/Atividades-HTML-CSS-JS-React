document.querySelectorAll('#delete-form').forEach(element => {
    element.addEventListener('submit', (ev) => {
        const confirmation = confirm('Tem certeza que deseja excluiresse post? ')

        if (!confirmation) {
            ev.preventDefault()
        }
    })
})

