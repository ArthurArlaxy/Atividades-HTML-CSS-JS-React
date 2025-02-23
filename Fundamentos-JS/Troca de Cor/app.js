function darkTheme(){
    document.body.style.color = '#FFFFFF'
    document.body.style.backgroundColor = '#000000'
}

function lightTheme(){
    document.body.style.color = '#000000'
    document.body.style.backgroundColor = '#FFFFFF'
}

function greenTheme(){
    document.body.className = 'green'
}


document.getElementById('light').addEventListener('click', lightTheme)
document.getElementById('dark').addEventListener('click',darkTheme)
document.getElementById('green').addEventListener('click', greenTheme)