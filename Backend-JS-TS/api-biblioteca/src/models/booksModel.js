const uuid = require('uuid').v4

const books = [
    {id: '1', title:'Book one', author: 'Author One', quantityAvailable: 4 },
    {id: '2', title:'Book two', author: 'Author two', quantityAvailable: 3 },
]

module.exports = {
    getAllBooks: () => books
    
}