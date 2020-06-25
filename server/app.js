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
app.use(express.static('public'))

// Express Route Handlers
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

app.get('/test', (req, res) => {
    res.send('Working!')
})

// Quote API routers
const quoteRouter = require('./src/routers')
// Start of path needs to match client proxy path ('/api')
app.use('/api/v1/quotes', quoteRouter)

// Server
const port = process.env.APP_SERVER_PORT || 3001
const server = http.createServer(app)
server.listen(port, () => console.log(`Server running on port ${port}`))
