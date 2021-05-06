import './App.css'
import React from 'react'
import PageNavbar from './components/header/PageNavbar'
import Footer from './components/footer/Footer'

import useWeb3Modal from './hooks/useWeb3Modal'

import {Nav} from 'react-bootstrap'

import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom'

import MarketPlaceIndex from './components/marketplace/MarketPlaceIndex'
import styled from 'styled-components'


import {GlobalStyleComponent} from './components/global-styles/global-fe-style'
import HomePage from './components/main/HomePage'
import MintAndRent from './components/main/MintAndRent'

const StyledLink = styled(NavLink)`
  
    color: white;  
    margin-right: 5px;
    display: flex;
    align-items: center;
  
`;

function App() {
 
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  console.log("Here");
  console.log(provider);
  console.log(loadWeb3Modal);
  console.log(logoutOfWeb3Modal);
  
  return (
    <Router>
      <GlobalStyleComponent>
        <PageNavbar 
        provider={provider}
        loadWeb3Modal={loadWeb3Modal}
        logoutOfWeb3Modal={logoutOfWeb3Modal}
        />
        <Nav>
            <StyledLink to="/">Home</StyledLink> 
            <StyledLink to="/marketplaceindex" > Market Place </StyledLink>
            <StyledLink to="/mintandrent" >Mint & Rent</StyledLink>
            <Switch>
            <Route exact strict path='/' component={HomePage}/> 
            <Route path='/marketplaceindex' component={MarketPlaceIndex}/>
            <Route path='/mintandrent' component={MintAndRent} />
          </Switch>
          </Nav>
        
        <Footer />
      </GlobalStyleComponent>
      </Router>
  );
}

export default App;
