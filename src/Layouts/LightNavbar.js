import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import "./layout.css"

const LightNavbar = () => {
  return (
    <div>

      <Navbar className='navbar-general p-2' bg="" expand="lg">
        <Container>
          <Navbar.Brand href="home">PCB Prototyping Tool</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="home">HOME</Nav.Link>
              <Nav.Link href="designer">BOARD DESIGNER</Nav.Link>
              <Nav.Link href="#link">MARKETPLACE</Nav.Link>
              <Nav.Link href="#link">PORTFOLIO</Nav.Link>
              <Nav.Link href="login">LOGIN&REGISTER</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default LightNavbar