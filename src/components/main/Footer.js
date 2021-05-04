import React from 'react'
import {Form, Button} from 'react-bootstrap'
import styled from 'styled-components'

import {LinkStyle} from './links-style'


export default function Footer() {

    const MainFooter = styled.div`
        margin-top: 2rem;
        `;

    {/* const NewsLetter = styled.div`
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        width: 40%;
        height: 150px;
        padding: 2rem;
        margin: auto;
    `; */}

    const LinksStyle = styled.div`
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        width: 60%;
        height:150px;
        margin: auto;
    `;

    const FooterLinks = styled.div`
        display:flex;
        flex-direction:column;
        align-content: center;
        justify-content: center;
        width: 30%;
        padding: auto;
        margin: 5rem;
        color: #fff;

        & > a {
            margin: auto;
        }
    `;

    const CopyrightStyle = styled.div`
        display: flex;
        align-content: center;
        justify-content:center;
        padding: auto;
        margin: auto;
        
        & > p{
            margin: 20px;
        }
    `;

    return (
        <MainFooter>
            <div >
            {/* <NewsLetter>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" style={{width:'100%'}}/>
                </Form.Group>
                <Button variant="primary" type="submit" style={{margin:'30px', height:'40px'}}>
                    Submit
                </Button>
            </NewsLetter> */}
            </div>
            <LinksStyle>
                <FooterLinks>
                    <LinkStyle>Telegram</LinkStyle><p></p>
                    <LinkStyle>Careers</LinkStyle><p></p>
                    <LinkStyle>Affiliates</LinkStyle>
                </FooterLinks>
                <FooterLinks>
                    <LinkStyle>Github</LinkStyle><p></p>
                    <LinkStyle>Docs</LinkStyle><p></p>
                    <LinkStyle>Team</LinkStyle>
                </FooterLinks>
                <FooterLinks>
                    <LinkStyle>Protocols</LinkStyle><p></p>
                    <LinkStyle>Partners</LinkStyle><p></p>
                    <LinkStyle>Gradient Paper</LinkStyle>
                </FooterLinks>
                 
             </LinksStyle>   
            <CopyrightStyle>
            <p>SuperRenting&copy;</p>
            </CopyrightStyle> 
        </MainFooter>
    )
}
