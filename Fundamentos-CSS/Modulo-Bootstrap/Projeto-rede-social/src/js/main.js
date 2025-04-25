// Importação de estilos e Bootstrap
import '../scss/styles.scss'
import { Dropdown , Modal, Carousel  } from 'bootstrap';


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
    if(prefersDark !== true){
        document.getElementById('btn-theme').classList.remove('bi-moon-stars')
        document.getElementById('btn-theme').classList.add('bi-brightness-high')
    }else{
        document.getElementById('btn-theme').classList.add('bi-moon-stars')
        document.getElementById('btn-theme').classList.remove('bi-brightness-high')
    }
}

document.addEventListener('DOMContentLoaded',automaticTheme)

function switchTheme() {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    if(currentTheme === 'dark'){
        document.getElementById('btn-theme').classList.remove('bi-moon-stars')
        document.getElementById('btn-theme').classList.add('bi-brightness-high')
    }else{
        document.getElementById('btn-theme').classList.add('bi-moon-stars')
        document.getElementById('btn-theme').classList.remove('bi-brightness-high')
    }
}

document.getElementById("btn-theme").addEventListener('click',switchTheme)

//Funcionalidades da Rede Social
