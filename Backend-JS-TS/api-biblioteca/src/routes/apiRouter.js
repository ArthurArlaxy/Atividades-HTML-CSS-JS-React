const express = require('express')
const booksController = require('../controller/booksController')
const { authMiddleware, admMiddleware } = require('../middleware/authMiddleware')
const loansController = require('../controller/loansController')
const apiRouter = express.Router()

apiRouter.get('/books',authMiddleware, booksController.index)
apiRouter.get('/books/:id',authMiddleware , booksController.book)
apiRouter.post('/books', authMiddleware , admMiddleware,booksController.save)
apiRouter.delete('/books/:id',authMiddleware , admMiddleware ,booksController.delete)
apiRouter.put('/books/:id/update',authMiddleware, admMiddleware,booksController.update)

apiRouter.get('/loans',authMiddleware, admMiddleware, loansController.index)
apiRouter.post('/loans', authMiddleware, loansController.save)
apiRouter.get('/loans/user', authMiddleware, loansController.usersLoans)
apiRouter.get('/loans/:id',authMiddleware, admMiddleware, loansController.loan)
apiRouter.put('/loans/:id/return', authMiddleware, loansController.returnLoan)


module.exports = apiRouter