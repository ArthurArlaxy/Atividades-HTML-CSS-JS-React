// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


// Define o tema inicial baseado na preferência do usuário
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const htmlScheme = document.documentElement;

if (prefersDarkScheme.matches) {
    htmlScheme.setAttribute('data-bs-theme', 'dark');
} else {
    htmlScheme.setAttribute('data-bs-theme', 'light');
}

// Se o usuário mudar o tema do sistema enquanto a página está aberta
prefersDarkScheme.addEventListener('change', e => {
    htmlScheme.setAttribute('data-bs-theme', e.matches ? 'dark' : 'light');
});
