import React from 'react'
import {MainStyle, SmStyle, RoundedDiv, RoundedStyle } from './social-global-style'

export default function SocialMedia() {
    return (
        <MainStyle>
            <h1 style={{margin:'auto'}}>Social Media</h1>
                <SmStyle>
                    <RoundedDiv>
                        <RoundedStyle></RoundedStyle>
                    </RoundedDiv>
                    <RoundedDiv>
                        <RoundedStyle></RoundedStyle>
                    </RoundedDiv>
                    <RoundedDiv>
                        <RoundedStyle></RoundedStyle>
                    </RoundedDiv>
                    <RoundedDiv>
                        <RoundedStyle></RoundedStyle>
                    </RoundedDiv> 
                 </SmStyle>   
        </MainStyle>
    )
}
