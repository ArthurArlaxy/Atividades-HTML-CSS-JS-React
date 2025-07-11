const path = require('node:path')
const fs = require('node:fs')


const listModel = {
    getAllLists(){
        const lists = fs.readdirSync(path.join(__dirname, '..', 'db')) 
        return lists
    },
    getListById(listName){
        
    },
    createList(listName){
        const dirPath = path.join(__dirname,'..','db',listName)

        if(fs.existsSync(dirPath)){
            console.log('Lista com esse nome já existe!')
            
        } 

        fs.mkdirSync(dirPath,{ recursive:true })
        console.log('Lista criada com sucesso!')
    },
    
}

module.exports = listModel