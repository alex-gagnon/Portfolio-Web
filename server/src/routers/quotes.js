const express = require('express')
const router = express.Router()

// Import Quote Controllers
const { getAllQuotes, getRandomQuote, getSingleQuote } = require('../quotes')

// Quote API routers
router
    .get('/', (req, res) => {
        res.send(getAllQuotes())
    })

router
    .get('/random', (req, res) => {
        res.send(getRandomQuote())
    })

router
    .get('/quote/:id', (req, res) => {
        res.send(getSingleQuote(req.params.id))
    })

module.exports = router