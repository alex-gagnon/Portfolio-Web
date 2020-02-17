export default [
    {
        "name": "intro",
        "value": [
            "Hey there,",
            "I'm Alex, a software quality assurance specialist." + 
                "I develop quality assurance solutions in test automation and performance testing," +
                "as well as API and Database testing.",
            "My portfolio is currently undergoing a redesign. So please bear with me while it is in progress."
        ]
    },
    {
        "name": "project",
        "value": [
            "Monk-E: An in-house microservices application to handle acquiring critical user data and generating reports on database analyses.",
            "Markdown Previewer: An application to perform quick checks using React.js."
        ]
    },
    {
        "name": "more",
        "value": ["My portfolio is currently undergoing a redesign. So please bear with me while it is in progress."]
    }
].map((o, index) => (
    {
        ...o, 
        _id: index, 
        isActive: index === 0 ? true : false
    }
))