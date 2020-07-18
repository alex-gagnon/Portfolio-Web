import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Navigation from "./navigation"
import Footer from "./footer"


class Portfolio extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <header>
                    <Navigation />
                </header>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}


const Home = () => (<h2>Home</h2>)
const About = () => (<h2>About</h2>)

export default Portfolio