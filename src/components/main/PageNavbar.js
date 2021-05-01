import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './main.css'
import { WalletButton } from './WalletButton'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'


  const NavContainer = styled.div`
    color: white;
    margin-left: 40px;
  `; 

  const fontStyle = {
    color: 'white'
    
  };
  const linkStyle = {
    color: 'white',
    marginLeft:'15px'
  };
 const LinkStyle = styled.a`
  cursor: pointer;
  color: white;
  margin-left: 15px;

  &:hover {
    color: purple;
    text-decoration: none;

  }
 `;




  const PageNavbar = (props) => {
    
    console.log(props.logoutOfWeb3Modal);

    return (
      
        <NavContainer>
            <Navbar>
            <h3>SuperRenting.</h3>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">           
            <Nav>
            <LinkStyle to="/" >Market Place</LinkStyle>
            <LinkStyle to="/" >Mint & Rent</LinkStyle>
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
        </NavContainer>
        
    );
}

export default PageNavbar;
