import React from 'react'
import { Button, Card } from 'react-bootstrap'
import styled from 'styled-components'





export default function MarketPlace() {
    const GradientButton = styled.div`
        color: white;
        background: rgb(255,167,66);
        background: linear-gradient(45deg, rgba(255,167,66,1) 0%, 
        rgba(255,45,45,1) 37%, rgba(186,48,255,1) 62%, rgba(0,232,212,1) 80%);
        border: none;
        border-radius: 20px;
        font-weight: 500;
        padding: .7rem;
    `;
    
    {/* Not sure if this css is working*/}
    const CardStyle = {
        backgroundColor:'white',
        width:'20%',
        alignContent:'center',
        margin:'10px'
    };

    const MainMarket = styled.div`
            display: flex;
            flex-direction:column;
            width: 85%; 
            background: rgb(34,0,29);
            background: linear-gradient(0deg, rgba(34,0,29,1) 0%, 
            rgba(106,22,93,1) 32%, rgba(157,38,138,1) 66%, rgba(255,0,216,1) 100%);
            margin: auto; 
            padding: 20px;
            border-radius: 2em;
        & > h1 { 
            margin: auto;
        }

        & > p { 
            margin-top: 1rem;
        }
    `;

    const InnerMarketContent = styled.div`
        display: flex;
        flex-direction: row;
        width: 85%; 
        margin: auto;
        padding: 30px;
        height: 350px;
        color: black;        
    `;

const CardMarketDiv = styled.div`
    display: flex;
    flex-direction: inline;
    width: 85%;
    height: 80%;
    margin: auto;
    
`;

const CardMarketContent = styled.div`
    width: 18rem; 
    margin: 10px;
    background-color: #fff;
`;

const GradientDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;  
    padding: 20px;
`;

const CardButton = styled.button`
    width: 50px;
    background: #22223b;
    color: white;
    padding: 5px;
    border-radius: 5px;
    
    &:hover {
    color: white;
  }
`;

    return (
        <MainMarket>
            <h1>Market Place</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <InnerMarketContent>
                <CardMarketDiv>
                    <CardMarketContent>
                        <Card.Body>
                            <Card.Title>Market Place 1</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <CardButton >Rent</CardButton>
                        </Card.Body>
                        </CardMarketContent>
                            <CardMarketContent>
                                <Card.Body>
                                    <Card.Title>Market Place 2</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                    <CardButton>Rent</CardButton>
                                </Card.Body>
                            </CardMarketContent>
                        <CardMarketContent>
                            <Card.Body>
                                <Card.Title>Market Place 3</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <CardButton>Rent</CardButton>
                            </Card.Body>
                        </CardMarketContent>
                        <CardMarketContent>
                        <Card.Body>
                            <Card.Title>Market Place 4</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            <CardButton>Rent</CardButton>
                        </Card.Body>
                    </CardMarketContent>
                </CardMarketDiv>
            </InnerMarketContent>
            <GradientDiv>
                <GradientButton>See The Offers</GradientButton>
            </GradientDiv>
        </MainMarket>
    )
}
