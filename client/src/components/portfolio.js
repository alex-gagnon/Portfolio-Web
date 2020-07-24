import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Projects from "./pages/projects"
import Contact from "./pages/contact"
import More from "./pages/more"
import Error from './pages/error'
import Footer from "./footer"
import Theme from "./theme/theme"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavLink from "react-bootstrap/NavLink"
import NavbarBrand from "react-bootstrap/NavbarBrand"
import NavbarToggle from "react-bootstrap/NavbarToggle"
import NavbarCollapse from "react-bootstrap/NavbarCollapse"

class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            links: ["about", "projects", "more"]
        }

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
            <div id="portfolio" className="portfolio-container" color-mode="light">
                <Router>
                    <header>
                        <Navbar id="top-nav" bg="dark" variant="dark" expand="lg" className="sticky-nav">
                            <NavbarBrand as={Link} to="/">
                                <img src={`${process.env.PUBLIC_URL}/logos/android-chrome-192x192.png`} alt="Alex Gagnon" height={60} width={60} />
                            </NavbarBrand>
                            <NavbarToggle aria-controls="basic-navbar-nav" />
                            <NavbarCollapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <NavLink as={Link} to="/">Home</NavLink>
                                    <NavLink as={Link} to="/about">About</NavLink>
                                    <NavLink as={Link} to="/projects">Projects</NavLink>
                                    <NavLink as={Link} to="/contact">Contact</NavLink>
                                    <NavLink as={Link} to="/more">More</NavLink>
                                </Nav>
                                <Theme />
                            </NavbarCollapse>
                        </Navbar>
                    </header>
                    <main className="main-container">
                        <Switch>
                            <Route exact path="/">
                                <Home {...this.getData("home")} />
                            </Route>
                            <Route path="/about">
                                <About {...this.getData("about")} />
                            </Route>
                            <Route path="/projects">
                                <Projects {...this.getData("projects")} />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/more">
                                <More {...this.getData("more")} />
                            </Route>
                            <Route component={Error} />
                        </Switch>
                    </main>
                </Router>
                <Footer />
            </div>
        )
    }
}

export default Portfolio