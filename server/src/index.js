require ('dotenv').config()

// Express App Setup
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const uuid = require('uuid/v4')

// Config
const config = require('./config')

// Initialization
const app = express()
app.use(cors())
app.use(bodyParser.json())

// Express Route Handlers
app.get('/test', (req, res) => {
    res.send('Working!')
})

// Server
const port = process.env.PORT || 3001
const server = http.createServer(app)
server.listen(port, () => console.log(`Server running on port ${port}`))
