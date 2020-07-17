const fs = require('fs');

const getFile = (filename) => {
    // Split text by double new line
    return fs.readFileSync(`${__dirname}/${filename}`, 'utf-8').split(/(\r\n){2}/)
}
var home = getFile('home.txt')
var about = getFile('about_me.txt')
var projects = getFile('projects.txt')
var more = getFile('more.txt')

const data = [
    {
        "name": "home",
        "value": home
    },
    {
        "name": "about me",
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
].map((o, index) => (
    {
        ...o, 
        _id: index, 
        isActive: index === 0 ? true : false
    }
))

module.exports = data