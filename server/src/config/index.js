require('dotenv').config()

// Database configuration
const config = {
    USER: process.env.USER,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    ACCESS_TOKEN: process.env.API_KEY
}

console.log(config)

module.exports = config;