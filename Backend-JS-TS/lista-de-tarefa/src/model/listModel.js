const path = require('node:path')
const fs = require('node:fs')


const listModel = {
    getAllLists(){
        const lists = fs.readdirSync(path.join(__dirname, '..', 'db')) 
        return lists
    },
    createList(title){
        const dirPath = fs.mkdirSync(path.join(__dirname,'..','db',title),)

        if(fs.exisysSync(dirPath)){
            return alert('Lista com esse nome já existe!')
        } 

        fs.mkdirSync(dirPath,{ recursive:true })
        alert('Lista criada com sucesso!')
    },
    
}

module.exports = listModel