// const express = require('express')
// const router = express.Router()
// const nodemailer = require('nodemailer')

// // Import data
// const config = require('../config')

// const transport = {
//     host: 'smtp.gmail.com',
//     port: 587,
//     auth: {
//         type: 'OAuth2',
//         user: config.USER,
//         clientId: config.CLIENT_ID,
//         clientSecret: config.CLIENT_SECRET,
//         accessToken: config.ACCESS_TOKEN
//     }
// }

// const transporter = nodemailer.createTransport(transport)
// transporter.verify((error, success) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log('Server is ready to take messages.')
//     }
// })

// // Email API routers
// router
//     .post('/', (req, res, next) => {
//         let name = req.body.name
//         let email = req.body.email
//         let message = req.body.message
//         let content = `name: ${name} \n email: ${email} \n message: ${message}`

//         console.log(config.USER)
//         let mail = {
//             from: name,
//             to: config.USER,
//             subject: 'New message from Contact Form',
//             text: content
//         }

//         transporter.sendMail(mail, (err, data) => {
//             if (err) {
//                 console.log(err)
//                 res.json({
//                     status: 'fail'
//                 })
//             } else {
//                 res.json({
//                     status: 'success'
//                 })
//             }
//         })
//     })

// module.exports = router