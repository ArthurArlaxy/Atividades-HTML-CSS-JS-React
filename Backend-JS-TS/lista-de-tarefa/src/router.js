const express = require('express')
const listController = require('./controller/listController')

const router = express.Router()

router.get('/', listController.index)
router.get('/lists', listController.lists)
router.get('/lists/create', listController.createListPage)
router.post('/lists/created', listController.createList)
router.get('/lists/:listName',listController.showList)
router.post('/lists/:listName/createTask',listController.createTask)
router.post('/lists/:listName/concludeTask', listController.concludeTask)
router.post('/lists/:listName/undoTask', listController.undoTask)
router.post('/lists/delete/:listName', listController.deleteList)

module.exports = router