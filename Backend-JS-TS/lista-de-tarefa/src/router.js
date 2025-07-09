const express = require('express')
const listController = require('./controller/listController')

const router = express.Router()

router.get('/', listController.index)
router.get('/lists', listController.lists)

module.exports = router