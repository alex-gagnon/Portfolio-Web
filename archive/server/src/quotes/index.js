const quotes = require('./quotes')

const getAllQuotes = () => quotes
const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)]
const getSingleQuote = (id) => quotes.filter(obj => obj.id === parseInt(id))

module.exports = {
    getAllQuotes,
    getRandomQuote,
    getSingleQuote
}