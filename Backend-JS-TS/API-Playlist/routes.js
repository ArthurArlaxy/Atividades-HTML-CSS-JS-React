const express = require('express')
const playlistController = require('./controller/playlistController')
const router = express.Router()

router.get('/playlists', playlistController.playlists)
router.post('/playlists',playlistController.create)
router.get('/playlists/:name', playlistController.playlist)
router.put('/playlists/:name/update', playlistController.update)
router.delete('/playlists/:name/delete',playlistController.delete)

module.exports = router