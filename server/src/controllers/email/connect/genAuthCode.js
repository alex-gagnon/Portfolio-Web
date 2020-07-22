const path = require('path')
const { google } = require('googleapis')
const { authenticate } = require('@google-cloud/local-auth')
const gmail = google.gmail('v1')
const config = require('../../config')
const { fstat } = require('fs')

// Run this file to generate code to request refresh and access tokens

async function send(data) {
    // Obtain user credentials to use for the request
    const auth = await authenticate({
        keyfilePath: path.join(__dirname, 'auth', 'oauth2.keys.json'),
        scopes: [
            'https://mail.google.com',
            'https://www.googleapis.com/auth/gmail.modify',            
            'https://www.googleapis.com/auth/gmail.compose',
            'https://www.googleapis.com/auth/gmail.send'
        ]
    })
    google.options({ auth })


    // Send message
    const subject = "Hello test"
    const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`
    const messageParts = [
        `From: Alex <alexgagnon227@gmail.com>`,
        `To: Alex <alexgagnon227@gmail.com>`,
        'Content-Type: text/html; charset=utf-8',
        'MIME-Version: 1.0',
        `Subject: ${utf8Subject}`,
        '',
        'Heres hoping it works'
    ]
    const message = messageParts.join('\n')


    // The body needs to be base64url encoded
    const encodedMessage = Buffer.from(message)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '')

    const res = await gmail.users.messages.send({
        userId: 'me',
        requestBody: {
            raw: encodedMessage
        }
    })
    
    console.log(res.data)
    return res.data
}

if (module === require.main) {
    send().catch(console.error)
}

module.exports = send