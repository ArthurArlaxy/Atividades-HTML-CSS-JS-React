const HttpError = require("../error/httpError")
const booksModel = require("../models/booksModel")

const books = [
    { id: '1', title:'Book one', author:'Author one', bookAvailable:5},
    { id: '2', title:'Book two', author:'Author two', bookAvailable:2}
]

const booksController = {
    //GET /api/books
    index: (req, res) => {
        const books = booksModel.getAllBooks()
        res.json(books)
    },
    //GET /api/books/:id
    book: (req, res) => {
        const { id } = req.params
        const book = booksModel.getBookByID(id)
        if(!book) throw new HttpError(404,"Book not found")
        res.json(book)
    },
    //POST /api/books
    save: (req, res) => {
        const { title, author, quantityAvailable } = req.body
        const newBook = booksModel.createBook(title, author, quantityAvailable)
        res.json(newBook)
    },
    //PUT /api/books/:id
    update: (req, res) => {
        const { id } = req.params
        const { title, author, quantityAvailable} = req.body

        const fieldsToUpdate = {}

        if(title) fieldsToUpdate.title = title
        if(author) fieldsToUpdate.author = author
        if(quantityAvailable) fieldsToUpdate.quantityAvailable = quantityAvailable

        if(Object.keys(fieldsToUpdate).length === 0) return res.status(400,"Bad request")

        const updatedBook = booksModel.updateBook(id,fieldsToUpdate)
        res.json(updatedBook)
    },
    //DELETE /api/bookd/:id
    delete: (req, res) => {
        const { id } = req.params
        const deletedBook = booksModel.deleteBook(id)
        res.json(deletedBook)
    }
}

module.exports = booksController