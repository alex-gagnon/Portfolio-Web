const fs = require('fs');

const getFile = (filename) => {
    let text = fs.readFileSync(`${__dirname}/${filename}`, 'utf-8')

    // Split text by double new line
    let splitText = text.split(/\n\s*\n/)
    // Replace single new lines with a space. Remove all occurences of \r and \n
    let formattedText = splitText.map(str => str.replace(/\r?|\r/g, '').replace(/\s*\n/g, ' '))
    return formattedText
}

let home = getFile('home.txt')
let about = getFile('about_me.txt')
let projects = getFile('projects.txt')
let more = getFile('more.txt')

const data = [
    {
        "name": "home",
        "value": home
    },
    {
        "name": "about",
        "value": about
    },
    {
        "name": "projects",
        "value": projects
    },
    {
        "name": "more",
        "value": more
    }
].map((obj, index) => {
    let o = Object.assign({}, obj)
    o._id = index
    return o
})

module.exports = data