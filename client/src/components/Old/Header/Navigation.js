import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from "react-bootstrap/Button";

class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed="top">
                <Navbar.Brand href="/" id="brand">AG</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/#about">About me</Nav.Link>
                        <Nav.Link href="/#experience">Experience</Nav.Link>
                        <Nav.Link href="/#contact">Contact</Nav.Link>
                    </Nav>
                    <hr/>
                    <Nav>
                        <Button variant="outline-info" href="/resume">Resume</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;