import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './main.css'
import { WalletButton } from './WalletButton'
import { Link } from 'react-router'

  
  const fontStyle = {
    color: 'white',
    fontWeight:'500',
  };
  const linkStyle = {
    color: 'white',
  };

  const buttonStyle = {
    fontWeight:'500',
    borderRadius:'15px',
  };

  const PageNavbar = (props) => {
    // eslint-disable-next-line
    console.log(props.logoutOfWeb3Modal);

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
          <WalletButton
              provider={props.provider}
              loadWeb3Modal={props.loadWeb3Modal}
              logoutOfWeb3Modal={props.logoutOfWeb3Modal}
            />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
            
        </div>
    );
}

export default PageNavbar;
