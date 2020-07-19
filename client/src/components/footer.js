import React, { Component } from "react"
import Navbar from "react-bootstrap/esm/Navbar"
import githubLogo from "../__images__/GitHub-Logos/GitHub-Mark-64px.png"
import linkedInLogo from "../__images__/LinkedIn-Logos/LI-In-Bug.png"
import twitterLogo from "../__images__/Twitter-Logos/Twitter_Logo_WhiteOnBlue/Twitter_Logo_WhiteOnBlue.png"


const gitHub = {
    id: "github-logo", 
    link: "https://github.com/alex-gagnon", 
    logo: githubLogo, 
    alt: "Github" 
}

const linkedIn = {
    id: "linkedIn-logo", 
    link: "https://www.linkedin.com/in/agagnon313/", 
    logo: linkedInLogo, 
    alt: "LinkedIn",
    style: { "width": "100%"}
}

const twitter = {
    id: "twitter-logo",
    link: "https://youtu.be/ub82Xb1C8os",
    logo: twitterLogo,
    alter: "Twitter",
    style: { "width": "80%"}
}

const Logos = (props) => {
    return (
        <a href={props.link} className="logo-link">
            <img id={props.id} src={props.logo} alt={props.alt} style={props.style} />
        </a>
    )
}

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logos: []
        }

        this.getCurrentYear = this.getCurrentYear.bind(this)
    }

    getCurrentYear() {
        let d = new Date()
        return d.getFullYear()
    }

    componentDidMount() {          
        this.setState({
            logos: [gitHub, linkedIn, twitter]
        })
    }

    render() {
        return (
            <footer>
                <div className="footer-top-container">                    
                    <Navbar>
                        <div className="logo-container">
                            {this.state.logos.map(logo => (
                                <Logos {...logo} />
                            ))}
                        </div>
                    </Navbar>
                </div>
                <div>
                    <small>&copy; Copyright {this.getCurrentYear()}, Alex Gagnon</small>
                </div>
            </footer>
        )
    }
}

export default Footer