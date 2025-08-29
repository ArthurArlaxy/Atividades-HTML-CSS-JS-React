const HttpError = require("../error/httpError")
const loanModel = require("../models/loansModel")


const loansController = {
    index: (req, res) => {
        const loans = loanModel.getAllLoans()
        res.json(loans)
    },
    loan: (req, res) => {
        const { id } = req.params
        const loan = loanModel.getLoansById(id)
        if(!loan) throw new HttpError(404,"Loan not found")
        res.json(loan)
    },
    usersLoans: (req, res) => {
        const userID = req.user.id 
        if(!userID) throw new HttpError(400, "Aunthorization required")
        const userLoans = loanModel.getLoansByUserID(userID)
        if(!userLoans) return res.json("You don't make any loans yet")
        res.json(userLoans)
    },
    save: (req,res) => {
        const { bookID } = req.body
        const userID  = req.user.id
        const newLoan = loanModel.createLoan(userID,bookID)
        res.json(newLoan)
    },
    returnLoan: (req, res) => {
        const { id } = req.params
        const returnedLoan = loanModel.returnLoan(id)
        res.json(returnedLoan)
    }
}

module.exports = loansController