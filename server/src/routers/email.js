const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const config = require('../config')
const path = require('path')

const { callbacks, email } = require('../controllers/email')

const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        type: "OAuth2",
        user: config.USER,
        clientId: config.CLIENT_ID,
        CLIENT_SECRET: config.CLIENT_SECRET,
        refresh_token: config.REFRESH_TOKEN,
        accessToken: accessToken
    }
}

const transporter = nodemailer.createTransport(transport)
transporter.verify((error, success) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Server is ready to take messages.')
    }
})

// Email API routers
router
    .post('/', (req, res, next) => {
        let name = req.body.name
        let email = req.body.email
        let message = req.body.message
        let content = `name: ${name} \n email: ${email} \n message: ${message}`

        email

        transporter.sendMail(mail, (err, data) => {
            if (err) {
                console.log(err)
                res.json({
                    status: 'fail'
                })
            } else {
                res.json({
                    status: 'success',
                    message: 'Email sent: ' + data.response
                })
            }
        })
    })

module.exports = router