const fs = require('fs')
const readline = require('readline')
const { google } = require('googleapis')
const path = require('path')


// Use to generate an access token

const SCOPES = [
    'https://mail.google.com',
    'https://www.googleapis.com/auth/gmail.modify',            
    'https://www.googleapis.com/auth/gmail.compose',
    'https://www.googleapis.com/auth/gmail.send'
]

const TOKEN_PATH = path.join(__dirname, 'auth', 'token.json')

function authorize(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.web
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]
    )

    // Check if token was previously stored
    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) {
            return getNewToken(oAuth2Client, callback)
        } else {
            oAuth2Client.setCredentials(JSON.parse(token))
            callback(oAuth2Client)
        }
    })
}

function getNewToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
    })
    console.log('Authorize this app by visiting this url: ', authUrl)

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.question('Enter the code from that page here including scopes: ', (code) => {
        rl.close()
        oAuth2Client.getToken(code, (err, token) => {
            if (err) {
                return console.error('Error retrieving access token: ', err)
            } else {
                oAuth2Client.setCredentials(token)
                // Store the token to disk for later program execution
                fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                    if (err) {
                        return console.error(err)
                    } else {
                        console.log('Token stored to: ', TOKEN_PATH)
                    }
                })
                callback(oAuth2Client)
            }
        })
    })
}

module.exports = authorize