const listModel = require("../model/listModel")

const listController = {
    // GET /
    index: (req, res) => {
        res.render('index')
    },
    // GET /lists
    lists: (req, res) => {
        const lists = listModel.getAllLists()
        res.render('lists', { lists })
    },
    // GET /lists/create
    createListPage: (req,res) => {
        res.render('create')
    },
    // POST /lists/create
    createList: (req,res) => {
        const { listName } = req.body
        listModel.createList(listName)
        res.redirect('/lists')
    },
    showList: (req, res) => {
       const listName = req.params.listName  
       const tasks = listModel.getListById(listName)
       res.render('list',{ listName,tasks })
    },
    createTask: (req, res) =>{
        const listName = req.params.listName
        const { taskName } = req.body
        listModel.createTask(listName,taskName)
        res.redirect(`/lists/${listName}`)
    },
    concludeTask: (req, res) =>{
        const listName = req.params.listName
        const { taskName } = req.body
        
        listModel.concludeTask(listName,taskName)
        res.redirect(`/lists/${listName}`)
    }
}

module.exports = listController