const path = require('node:path')
const fs = require('node:fs')
const { isUtf8 } = require('node:buffer')


const listModel = {
    getAllLists(){
        const lists = fs.readdirSync(path.join(__dirname, '..', 'db')) 
        return lists
    },
    getListById(listName){
        const dirPath = path.join(__dirname,'..','db',listName)

        const tasks = fs.readdirSync(dirPath)

        return tasks
    },
    createList(listName){
        const dirPath = path.join(__dirname,'..','db',listName)

        if(fs.existsSync(dirPath)){
            console.log('Lista com esse nome já existe!')
            
        } 

        fs.mkdirSync(dirPath,{ recursive:true })
        console.log('Lista criada com sucesso!')
    },
    createTask(listName,taskName){
        const dirPath = path.join(__dirname,'..','db',listName)
        const filePath = path.join(dirPath,taskName)
        fs.writeFileSync(filePath,'')
    } 
}

module.exports = listModel