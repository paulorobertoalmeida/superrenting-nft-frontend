import MarketPlaceIndex from '../marketplace/MarketPlaceIndex'
import React, {App} from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { WalletButton } from '../main/WalletButton'
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { NavContainer, LinkStyle, LinkStyles } from './global-header-styles.jsx'


const StyledLink = styled(NavLink)`
  
    color: white;  
    margin-right: 5px;
    display: flex;
    align-items: center;
  
`;

  const PageNavbar = (props) => {
    
    console.log(props.logoutOfWeb3Modal);

    return (
      <Router>
        <NavContainer>
            <Navbar>
            <h3>SuperRenting.</h3>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">           
            <Nav>
            <StyledLink to="/">Home</StyledLink> 
            <StyledLink to="/marketplaceindex" >Market Place</StyledLink>
            <StyledLink to="/" >Mint & Rent</StyledLink>
            
            {/* <Link to="/" style={linkStyle}>About Us</Link>
            <Link to="/" style={linkStyle}>Docs</Link> */}
            </Nav>

          
              <Switch>
                <Route exact path='/' component={App}/> 
                <Route  path='/marketplaceindex' component={MarketPlaceIndex}/>
                <Route  path='/docs' />
              </Switch>

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
        </Router>
    );
}

export default PageNavbar;
