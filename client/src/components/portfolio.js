import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Projects from "./projects"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavLink from "react-bootstrap/NavLink"
import NavbarBrand from "react-bootstrap/NavbarBrand"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"


class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.getData = this.getData.bind(this)
    }

    getData = (name) => {
        const { data } = this.props
        return data.find(obj => obj.name === name)
    }

    componentDidUpdate(nextProps) {
        if (this.props !== nextProps) {
            this.props = nextProps
        }
    }

    render() {
        return (
            <div className="portfolio-container">
                <Router>
                    <header>
                        <Navbar bg="dark" variant="dark" expand="lg" className="sticky-nav">
                            <NavbarBrand as={Link} to="/">Alex Gagnon</NavbarBrand>
                            <NavbarToggle aria-controls="basic-navbar-nav" />
                            <NavbarCollapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <NavLink as={Link} to="/">Home</NavLink>
                                    <NavLink as={Link} to="/about">About</NavLink>
                                    <NavLink as={Link} to="/projects">Projects</NavLink>
                                </Nav>
                            </NavbarCollapse>
                        </Navbar>
                    </header>
                    <main className="main-container">
                        <Switch>
                            <Route exact path="/">
                                <Home {...this.getData("home")} />
                            </Route>
                            <Route path="/about">
                                <About {...this.getData("about me")} />
                            </Route>
                            <Route path="/projects">
                                <Projects {...this.getData("projects")} />
                            </Route>
                        </Switch>
                    </main>
                </Router>
                <footer className="sticky-footer">
                    Footer
                </footer>
            </div>
        )
    }
}

export default Portfolio