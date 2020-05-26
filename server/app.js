require('dotenv').config()

// Express App Setup
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const uuid = require('uuid/v4')

// Config
//const config = require('./src/config/index')

// Initialization
const app = express()
app.use(cors())
app.use(bodyParser.json())

// Express Route Handlers
app.get('/', (req, res) => {
    res.send('Server is up.')
})

app.get('/test', (req, res) => {
    res.send('Working!')
})

// Quote API routers
const quoteRouter = require('./src/routers')
app.use('/v1/quotes', quoteRouter)

// Server
const port = process.env.PORT || 8000
const server = http.createServer(app)
server.listen(port, () => console.log(`Server running on port ${port}`))
