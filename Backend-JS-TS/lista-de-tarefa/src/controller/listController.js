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
        res.redirect('/lists/create')
    },
    showList: (req, res) => {
       const listName = req.params.listName  
    }
}

module.exports = listController