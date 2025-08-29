const HttpError = require('../error/httpError')
const booksModel = require('./booksModel')
const uuid = require('uuid').v4

const loans = [
    { id:'1', userID:'1', bookID:'2', loanDate: new Date('01-08-2025'), dueDate:new Date(),  returnedAt:null, isLate:false, isReturned:false}
]

const loanModel = {
    getAllLoans: () => {
        const today = new Date()
        loans.forEach(loan => {
            if(!loan.isReturned){
                loan.isLate = today > loan.dueDate
            }
        })
        return loans
    },

    getLoansById: (id) => {
        const loan = loans.find(loan => loan.id === id)
        const today = new Date()
        if(!loan.isReturned){
            loan.isLate = today > loan.dueDate
        }
        return loan
    },

    createLoan: (userID, bookID) => {

        if(!userID || !bookID) throw new HttpError(400, "Invalid Loan")

        const loanDate = new Date()
        const dueDate = new Date(loanDate)
        dueDate.setDate(loanDate.getDate() + 14)

        const newLoan ={
            id:uuid(),
            userID,
            bookID,
            loanDate,
            dueDate,
            returnedAt:null,
            isLate:false,
            isReturned: false
        }

        booksModel.loanedBook(bookID)
        loans.push(newLoan)
        return newLoan
    },
    returnLoan: (id) =>{
        const loan = loanModel.getLoansById(id)
        if(loan.isReturned) return null
        loan.returnedAt = new Date()
        loan.isReturned = true
        booksModel.returnedBook(loan.bookID)
        return loan
    }
}

module.exports = loanModel