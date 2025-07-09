const listModel = require("../model/listModel")

const listController = {
    // GET /
    index: (req, res) => {
        res.render('index')
    },
    // GET /list
    lists: (req, res) => {
        const lists = listModel.getAllLists()
        res.render('lists', { lists })
    } 
}

module.exports = listController