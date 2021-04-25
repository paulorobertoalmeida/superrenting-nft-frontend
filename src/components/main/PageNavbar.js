import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './main.css'
import { WalletButton } from './WalletButton'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


  
  const fontStyle = {
    color: 'white',
    fontWeight:'500',
  };
  const linkStyle = {
    color: 'white',
    marginLeft:'15px'
  };

  const buttonStyle = {
    fontWeight:'500',
    borderRadius:'15px',
  };

  const PageNavbar = (props) => {
    
    console.log(props.logoutOfWeb3Modal);

    return (
      
        <div>
            <Navbar>
            <Navbar.Brand href="#home" style={fontStyle}>SuperRenting</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">           
            <Nav>
            <Link to="/" style={linkStyle}>Market Place</Link>
            <Link to="/" style={linkStyle}>Mint & Rent</Link>
            {/* <Link to="/" style={linkStyle}>About Us</Link>
            <Link to="/" style={linkStyle}>Docs</Link> */}
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
