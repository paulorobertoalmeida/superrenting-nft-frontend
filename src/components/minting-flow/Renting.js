import React from 'react'
import {GradientButton} from '../global-styles/button-style'
import { MainContainerFlow, InnerContainerFlow, ContentFlow, NFTDisplay, Text, Paragraph } from '../minting-flow/flow-global'


export default function Renting() {
    return (

        <MainContainerFlow>
            <InnerContainerFlow>
                <ContentFlow>
                <Text>Mint Your Nft</Text>
                    <NFTDisplay> Your Nft is Here </NFTDisplay>
                    <div>
                        <input type="text">Put information here </input>
                        <GradientButton>Minting</GradientButton>
                    </div>
                    </ContentFlow>
            </InnerContainerFlow>
        </MainContainerFlow>
    )
}

