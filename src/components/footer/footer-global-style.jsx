import React from 'react'
import styled from 'styled-components'


export const MainFooter = styled.div`
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

export const LinksStyle = styled.div`
display: flex;
flex-direction: row;
align-content: center;
justify-content: center;
width: 60%;
height:150px;
margin: auto;
`;

export const FooterLinks = styled.div`
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

export const CopyrightStyle = styled.div`
display: flex;
align-content: center;
justify-content:center;
padding: auto;
margin: auto;

& > p{
    margin: 20px;
}
`;

