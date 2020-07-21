const { google } = require('googleapis')
const config = require('../../../config')

function send(mailData, auth) {
    const gmail = google.gmail({version: 'v1', auth})
    
    const subject = 'New message from Contact Form'
    const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`

    let mail = [
        `from: ${mailData.name}`,
        `to: ${config.USER}`,
        `subject: ${subject}`,
        `text: ${mailData.content}`
    ]
    const message = mail.join('\n')

    const encodedMessage = Buffer.from(message)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '')
    
        const resp = await gmail.users.messages.send({
            userId: 'me',
            requestBody: {
                raw: encodedMessage
            }
        })
        console.log(resp.data)
        return resp.data
}

module.exports = send