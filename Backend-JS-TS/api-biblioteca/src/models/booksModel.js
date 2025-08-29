const HttpError = require('../error/httpError')
const uuid = require('uuid').v4

const books = [
    {id: '1', title:'Book one', author: 'Author One', quantityAvailable: 4 },
    {id: '2', title:'Book two', author: 'Author two', quantityAvailable: 3 },
]

module.exports = {
    getAllBooks: () => books.map(book => ({id:book.id, title:book.title})),

    getBookByID: (id) => books.find(book => book.id === id),

    createBook: (title, author, quantityAvailable) =>{

        if( typeof title !== 'string' || typeof author !== 'string' || typeof quantityAvailable !== 'number'){
            throw new HttpError(400, "Invalid Credentials")
        } 

        const newBook = {
            id: uuid(),
            title,
            author,
            quantityAvailable
        }

        books.push(newBook)
        return newBook
    },

    updateBook: (id, fieldsToUpdate) => {
        const bookIndex = books.findIndex(book => book.id === id)
        if(bookIndex === -1) throw new HttpError(404, 'Book not found')
        books[bookIndex] = {...books[bookIndex], ...fieldsToUpdate}
        return books[bookIndex]
    },
    deleteBook: (id) => {
        const bookIndex = books.findIndex(book => book.id === id)
        if(bookIndex === -1) throw new HttpError(404, 'Book not found')
        const deletedBook = books.splice(bookIndex,1)
        return deletedBook
    },
    loanedBook: (id) => {
        const bookIndex = books.findIndex(book => book.id === id)
        if(bookIndex === -1) throw new HttpError(404, 'Book not found')
        if(!books[bookIndex].quantityAvailable > 0) throw new HttpError(400, "Don't have available books")
        books[bookIndex].quantityAvailable--
    },
    returnedBook:(id) => {
        const bookIndex = books.findIndex(book => book.id === id)
        if(bookIndex === -1) throw new HttpError(404, 'Book not found')
        books[bookIndex].quantityAvailable++
    },
}