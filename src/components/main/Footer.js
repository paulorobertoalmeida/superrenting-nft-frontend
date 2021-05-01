import React from 'react'
import {Form, Button} from 'react-bootstrap'
import styled from 'styled-components'


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
                    <a>Telegram</a><p></p>
                    <a>Careers</a><p></p>
                    <a>Affiliates</a>
                </FooterLinks>
                <FooterLinks>
                    <a>Github</a><p></p>
                    <a>Docs</a><p></p>
                    <a>Team</a>
                </FooterLinks>
                <FooterLinks>
                    <a>Protocols</a><p></p>
                    <a>Partners</a><p></p>
                    <a>Gradient Paper</a>
                </FooterLinks>
                 
             </LinksStyle>   
            <CopyrightStyle>
            <p>SuperRenting&copy;</p>
            </CopyrightStyle> 
        </MainFooter>
    )
}
