const path = require('node:path')
const fs = require('node:fs')


const listModel = {
    getAllLists(){
        let lists = fs.readdirSync(path.join(__dirname, '..', 'db')) 
        return lists
    },
    createList(){
        return ''
    }
}

module.exports = listModel