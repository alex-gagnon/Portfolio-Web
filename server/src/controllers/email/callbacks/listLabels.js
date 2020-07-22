const { google } = require('googleapis')

function listLabels(auth) {
    const gmail = google.gmail({version: 'v1', auth})
    gmail.users.labels.list({
        userId: 'me',
    }, (err, res) => {
        if (err) {
            return console.log('The API returned an error: ' + err)
        }
        const labels = res.data.labels;
        if (labels.length) {
            console.log('Labels:');
            labels.forEach((label) => {
                console.log(`- ${label.name}`)
            });
        } else {
            console.log('No labels found.')
        }
    });
}

module.exports = listLabels