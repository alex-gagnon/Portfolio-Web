import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"


class Navigation extends Component {
    constructor(props) {
        super(props)
    
    }

    render() {
        return (
            <Router>
                <div>
                    <h1>Alex Gagnon</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About me</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

const Home = () => (<h2>Home</h2>)
const About = () => (<h2>About</h2>)

export default Navigation