export function randomPassword(tamanho){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%*&_-0123456789"
    let password = ''
    for(let i=0;i<tamanho;i++){
        let char = Math.floor(Math.random() * chars.length)
        password += chars[char]
    }
    return `${password}`
}

export function copy(password){
    if (!password){
        return alert("Primeiro é preciso gerar uma senha!")
    }
    navigator.clipboard.writeText(password)
}