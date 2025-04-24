// Importação de estilos e Bootstrap
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

// Modal (opcional)
const myModal = document.getElementById('post')
const myInput = document.getElementById('post-input')

if (myModal && myInput) {
    myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus()
    })
}


function automaticTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-bs-theme', prefersDark ? 'dark' : 'light');
}

automaticTheme()


function switchTheme() {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
}

document.getElementById("btn-theme").addEventListener('click',switchTheme)