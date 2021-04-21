import React from 'react'
import { Navbar, Nav ,Button } from 'react-bootstrap'
import './main.css'

export default function PageNavbar() {
  const fontStyle = {
    color: 'white',
    fontWeight:'500',
  };
  const linkStyle = {
    color: 'white',
  };

  const buttonStyle ={
    fontWeight:'500',
    borderRadius:'15px',
  };

    return (
        <div>
        <Navbar>
        <Navbar.Brand href="#home" style={fontStyle}>SuperRenting</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav >
        <Nav.Link href="#home" style={linkStyle}>Market Place</Nav.Link>
        <Nav.Link href="#home" style={linkStyle}>About Us</Nav.Link>
        <Nav.Link href="#home" style={linkStyle}>Docs</Nav.Link>
        </Nav>
          <Navbar.Text>
          <Button variant="warning" style={buttonStyle}>Connect Wallet</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
            
        </div>
    )
}



