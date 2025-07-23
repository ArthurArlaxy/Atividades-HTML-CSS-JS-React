const express = require('express')
const gamesController = require('./Controller/gamesController')
const router = express.Router()

router.get('/games', gamesController.index)
router.get('/games/:id', gamesController.show)
router.post('/games', gamesController.create)
router.post('/games/:id/genres', gamesController.newGenre)

module.exports = router