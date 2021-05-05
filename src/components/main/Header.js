import { findByLabelText } from '@testing-library/dom';
import React from 'react'
import styled from 'styled-components'
import { GradientButton } from '../global-styles/button-style.jsx'


export default function Header() {

    const HeaderContainer = styled.div `
        display: flex;
        flex: row;
        align-content: center;
        justify-content:center;
        height:800px;
        padding: 5rem;
        margin:auto;       
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
