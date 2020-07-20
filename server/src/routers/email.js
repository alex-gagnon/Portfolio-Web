const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

// Import data
const config = require('../config')

const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: config.USER,
        pass: config.PASS
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
    .get('/send', (req, res, next) => {
        let name = req.body.name
        let email = req.body.email
        let message = req.body.message
        let content = `name: ${name} \n email: ${email} \n message: ${message}`

        let mail = {
            from: name,
            to: config.USER,
            subject: 'New message from Contact Form',
            text: content
        }

        transporter.sendMail(mail, (err, data) => {
            if (err) {
                res.json({
                    status: 'fail'
                })
            } else {
                res.json({
                    status: 'success'
                })
            }
        })

        res.send(data)
    })

module.exports = router