export default [
    {
        "name": "intro",
        "value": [
            "Hey there,",
            "I'm Alex, and I currently work as a software quality assurance specialist with experience working in Agile environments." + 
                " I develop quality assurance solutions in test automation and performance testing," +
                " as well as API and Database testing.",
            "I am targeting entry-level positions as a backend or frontend software developer.",
            "I am experienced in functional and object-oriented programming; developing, testing, " +
                "and debugging code; designing web interfaces; and constructing microservices.",
            "I can quickly learn and master new technologies and am successful in working in both team and individual settings."
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