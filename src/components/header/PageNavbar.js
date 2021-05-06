
import React, {App} from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { WalletButton } from '../main/WalletButton'
import { BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { NavContainer, LinkStyle, LinkStyles } from './header-global-styles'


const StyledLink = styled(NavLink)`
  
    color: white;  
    margin-right: 5px;
    display: flex;
    align-items: center;
  
`;

  const PageNavbar = (props) => {
    
    console.log(props.logoutOfWeb3Modal);

    return (
      
        <NavContainer>
            <Navbar>
            <h3>SuperRenting.</h3>
            <Navbar.Toggle />
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
        
    );
}

export default PageNavbar;
