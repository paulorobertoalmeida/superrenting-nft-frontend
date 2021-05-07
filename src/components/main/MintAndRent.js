import React from 'react'
import {GradientButton} from '../global-styles/button-style'
import { MainContainerFlow, InnerContainerFlow, ContentFlow, NFTDisplay, Text, Paragraph } from '../minting-flow/flow-global'


export default function MintAndRent() {
    return (

        <MainContainerFlow>
            <InnerContainerFlow>
                <ContentFlow>
                <Text>Mint Your Nft</Text>
                    <NFTDisplay> Your Nft is Here </NFTDisplay>
                    <div>
                        <GradientButton>Minting</GradientButton>
                    </div>
                    </ContentFlow>
            </InnerContainerFlow>
        </MainContainerFlow>
    )
}

