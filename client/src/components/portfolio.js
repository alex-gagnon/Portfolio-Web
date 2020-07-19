import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Projects from "./projects"
import Footer from "./footer"


class Portfolio extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <header>                        
                            <h1>Alex Gagnon</h1>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About me</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                            </ul>
                        </header>
                        <main>
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route>
                                    <Projects />
                                </Route>
                            </Switch>
                        </main>
                    </div>
                </Router>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default Portfolio