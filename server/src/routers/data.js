const express = require('express')
const router = express.Router()

// Import data
const data = require('../controllers/data')

// Data API routers
router
    .get('/', (req, res) => {
        res.send(data)
    })

module.exports = router