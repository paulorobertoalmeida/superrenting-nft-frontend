import './App.css'
import React from 'react'
import PageNavbar from './components/header/PageNavbar'
import Footer from './components/footer/Footer'

import useWeb3Modal from './hooks/useWeb3Modal'


import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom'

import MarketPlaceIndex from './components/marketplace/MarketPlaceIndex'
import styled from 'styled-components'
import { Navbar, Nav } from 'react-bootstrap'
import { WalletButton } from './components/main/WalletButton'



import {GlobalStyleComponent} from './components/global-styles/global-fe-style'
import HomePage from './components/main/HomePage'
import MintAndRent from './components/main/MintAndRent'
import { NavContainer, LinkStyle, LinkStyles } from './components/header/header-global-styles'

const StyledLink = styled(NavLink)`
    color: white;  
    margin-right: 5px;
    display: flex;
    align-items: center;

`;

function App(props) {
 
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  console.log("Here");
  console.log(provider);
  console.log(loadWeb3Modal);
  console.log(logoutOfWeb3Modal);
  
  return (
    <Router>
      <GlobalStyleComponent>
        <NavContainer>
          <Navbar>
            <h3>SuperRenting.</h3>
            <StyledLink to="/">Home</StyledLink> 
                      <StyledLink to="/marketplaceindex" > Market Place </StyledLink>
                      <StyledLink to="/mintandrent" >Mint & Rent</StyledLink>
          
              <Navbar.Collapse className="justify-content-end">           
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
  <HomePage />
        <Footer />
      </GlobalStyleComponent>
      
      </Router>
      
  );
}

export default App;
