const quotes = require('./quotes')

const getAllQuotes = () => quotes
const getRandomQuote = () => quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)]
const getSingleQuote = (id) => quotes.quotes.filter(obj => obj.id === parseInt(id))[0]

module.exports = {
    getAllQuotes,
    getRandomQuote,
    getSingleQuote
}