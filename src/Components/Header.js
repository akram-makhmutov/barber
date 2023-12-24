import React, {Component} from 'react';
import {Navbar, Nav, FormControl, Container, Form, Button} from 'react-bootstrap'
import * as PropTypes from "prop-types";

function Containter(props) {
    return null;
}

Containter.propTypes = {children: PropTypes.node};

class Header extends Component {
    logo;
    render() {
        return (
            <Navbar fixed="top" collapseOnSelect expand="md" bg="light" variant="light">
                <Containter>
                    <Navbar.Brand href="/">
                        <img
                            src={this.logo}
                            height="30"
                            weight="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav"/>
                    <Nav className="mr-auto"/>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">Our Team</Nav.Link>
                    <Nav.Link href="/">Gallery</Nav.Link>
                </Containter>
            </Navbar>
        )
    }
}

export default Header;