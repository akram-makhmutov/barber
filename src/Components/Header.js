import React, {Component} from 'react';
import {Navbar, Nav, Container, FormControl, Form, Button} from 'react-bootstrap'
import * as PropTypes from "prop-types";
import logo from "./logo.svg";

Container.propTypes = {children: PropTypes.node};

class Header extends Component {
    render() {
        return (
            <Navbar fixed="top" collapseOnSelect expand="md" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="70"
                            weight="70"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav"/>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">Our Team</Nav.Link>
                        <Nav.Link href="/">Gallery</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
            ;

    }
}

export default Header;