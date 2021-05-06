import React from 'react'
import {Form, Button} from 'react-bootstrap'
import styled from 'styled-components'
import {MainFooter, LinkStyles, FooterLinks, CopyrightStyle, LinksStyle } from './footer-global-style'
import {LinkStyle} from '../global-styles/links-style'


export default function Footer() {

    
    return (
        <MainFooter>
            <CopyrightStyle>
            <p>SuperRenting&copy;</p>
            </CopyrightStyle> 
        </MainFooter>
    )
}
