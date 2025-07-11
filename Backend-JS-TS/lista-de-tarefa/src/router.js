const express = require('express')
const listController = require('./controller/listController')

const router = express.Router()

router.get('/', listController.index)
router.get('/lists', listController.lists)
router.get('/lists/create', listController.createListPage)
router.post('/lists/created', listController.createList)
router.get('/lists/:listName')

module.exports = router