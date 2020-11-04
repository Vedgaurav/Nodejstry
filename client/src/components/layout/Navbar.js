import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'

class Navigationbar extends Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Profiles</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Sign Up</Nav.Link>
              
            </Nav>
            
          </Navbar>
        )
    }
}

export default Navigationbar;

{/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form> */}



{/* <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
<div className="container">
    <a className="navbar-brand" href="landing.html">DevConnector</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="profiles.html">Developers
                </a>
            </li>
        </ul>

        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="register.html">Sign Up
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="login.html">Sign Up
                </a>
            </li>
        </ul>
    </div>
</div>
</nav> */}