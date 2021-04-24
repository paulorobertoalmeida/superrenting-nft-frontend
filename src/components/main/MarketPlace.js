import React from 'react'
import { Button, Card } from 'react-bootstrap'




export default function MarketPlace() {
    const gradientButton = {
        color:'white',
        background: 'rgb(255,167,66)',
        background: 'linear-gradient(45deg, rgba(255,167,66,1) 0%, rgba(255,45,45,1) 37%, rgba(186,48,255,1) 62%, rgba(0,232,212,1) 80%)',
        border:'none',
        borderRadius:'30px',
        fontWeight:'500',
    };

    const cardStyle = {
        backgroundColor:'white',
        width:'20%',
        alignContent:'center',
        margin:'10px'
    };
    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            width:'85%', 
            background: 'rgb(34,0,29)',
            background: 'linear-gradient(0deg, rgba(34,0,29,1) 0%, rgba(106,22,93,1) 32%, rgba(157,38,138,1) 66%, rgba(255,0,216,1) 100%)',
            margin:'auto', 
            padding:'20px',
            borderRadius:'2em',
            border:'solid 2px transparent'
            
        }}>
            <h1 style={{margin: 'auto'}}>Market Place</h1>
            <p style={{margin: '1rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <div style={{
                display:'flex',
                flexDirection:'row',
                width:'85%', 
                margin:'auto', 
                padding:'30px',
                height:'350px',
                color:'black'
            }}>
            <div style={{
                display:'flex',
                flexDirection:'row',
                width:'85%',
                height:'80%',
                margin:'auto',
            }}>
            <Card style={{ width: '18rem', margin:'10px' }}>
                <Card.Body>
                    <Card.Title>Market Place 1</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Rent</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin:'10px' }}>
                <Card.Body>
                    <Card.Title>Market Place 2</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Rent</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin:'10px' }}>
                <Card.Body>
                    <Card.Title>Market Place 3</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Rent</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin:'10px' }}>
                <Card.Body>
                    <Card.Title>Market Place 4</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Rent</Button>
                </Card.Body>
                </Card>
                </div>
            </div>
            <div style= {{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',  
                padding:'20px',
            }}>
            <Button variant="warning" style={gradientButton}>See The Offers</Button>
            </div>
        </div>
    )
}
