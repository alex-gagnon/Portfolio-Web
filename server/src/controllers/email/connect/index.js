const fs = require('fs')
const path = require('path')

// Get callbacks
const authorize = require('./genAccessToken')
const { listLabels } = require('../callbacks')

const CRED_PATH = path.join(__dirname, 'auth', 'credentials.json')

// Start here
// Load client data from auth dir
function email(callback) {
    fs.readFile(CRED_PATH, (err, content) => {
        if (err) {
            return console.log('Error loading client file: ', err)
        } else {
            authorize(JSON.parse(content), callback)
        }
    })
}

if (module === require.main) {
    connect(listLabels)
}

module.exports = email