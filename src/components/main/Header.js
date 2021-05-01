import { findByLabelText } from '@testing-library/dom';
import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import styled from 'styled-components'



export default function Header() {

    const HeaderContainer = styled.div `
        display: flex;
        flex: row;
        align-content: center;
        justify-content:center;
        height:800px;
        padding: 5rem;
        margin:auto;
        
        &:hover {

        }
        
    `;

    const LeftContent = styled.div`
      padding: 9rem;
      height: 80%;
      width: 50%;
        
      `;

    const RightContent = styled.div`
        display: flex;
        flex-direction: column;
        padding: 1rem;
        
    `;

    const GradientButton = styled.button`
        color: white;
        background: rgb(255,167,66);
        background: linear-gradient(45deg, rgba(255,167,66,1) 0%, rgba(255,45,45,1) 37%, rgba(186,48,255,1) 62%, rgba(0,232,212,1) 80%);
        border: none;
        border-radius: 30px;
        font-weight: 500;
        margin-top:2rem;
        padding: .5rem;

        &:hover {

        }
    `;

    return (
        <HeaderContainer>
        <LeftContent id="showcases">
            <h1 style={{fontWeight:'800'}}> Rent, Play & Return </h1>
            <div id="content" style={{margin: '5px'}}>
            <p>What About Renting Your favourite Items  <br />
            Insted of Spend a lot of Money Buying??<br />     
            SuperRenting is the platform the makes this happens</p>
            </div>
            <GradientButton id="main-page-btn" >Start Now</GradientButton>
        </LeftContent>
        <RightContent>
        <img src="/img/logo.png" alt="SR-logo" />
        </RightContent>
        </HeaderContainer>

    )
}
