const express = require('express')
const booksController = require('../controller/booksController')
const { authMiddleware, admMiddleware } = require('../middleware/authMiddleware')
const apiRouter = express.Router()

apiRouter.get('/books',authMiddleware, booksController.index)
apiRouter.get('/books/:id',authMiddleware , booksController.book)
apiRouter.post('/books', authMiddleware , admMiddleware,booksController.save)
apiRouter.delete('/books/:id',authMiddleware , admMiddleware ,booksController.delete)
apiRouter.put('/books/:id/update',authMiddleware, admMiddleware,booksController.update)



module.exports = apiRouter