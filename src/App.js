import './App.css'
import React from 'react'
import PageNavbar from './components/header/PageNavbar'
import Header from './components/header/Header'
import MarketPlace from './components/main/MarketPlace'
import LastRented from './components/last-rented/LastRented'
import AboutUs from './components/about/AboutUs'
import LorenIpsun from './components/main/extras/LorenIpsun'
import TopRenters from './components/last-rented/TopRenters'
import Games from './components/games/Games'
import SocialMedia from './components/socialmedia/SocialMedia'
import Footer from './components/footer/Footer'
import useWeb3Modal from './hooks/useWeb3Modal'

import {Nav} from 'react-bootstrap'

import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom'

import MarketPlaceIndex from './components/marketplace/MarketPlaceIndex'
import styled from 'styled-components'


import {GlobalStyleComponent} from './components/global-styles/global-fe-style'

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
        <StyledLink to="/">Home</StyledLink> 
        <StyledLink to="/marketplaceindex" >Market Place</StyledLink>
        <StyledLink to="/" >Mint & Rent</StyledLink>
      

          <Switch>
            <Route exact strict path='/' component={App}/> 
            <Route path='/marketplaceindex' exact component={MarketPlaceIndex}/>
            <Route  path='/docs' />
          </Switch>

        <Header />
        <MarketPlace />
         <LorenIpsun />
        <LastRented />
        <AboutUs />
        <TopRenters />
        <Games />
        <SocialMedia /> 
        <Footer />
      </GlobalStyleComponent>
      </Router>
  );
}

export default App;
