import { findByLabelText } from '@testing-library/dom';
import React from 'react'
import { Button, Carousel } from 'react-bootstrap'



export default function Header() {

    const mainContainer ={
        display:'flex',
        flex:'row',
        alignContent:'center',
        justifyContent:'center',
        height:'800px',
        padding:'5rem',
        margin:'auto'
    };
    const headerContainer= {
      padding:'9rem',
      height:'80%',
      width: '50%',
        
    };

    const headerContainer2= {
        display:'flex',
        flexDirection:'column',
        padding:'1rem'
        
    };

    const gradientButton = {
        color:'white',
        background: 'rgb(255,167,66)',
        background: 'linear-gradient(45deg, rgba(255,167,66,1) 0%, rgba(255,45,45,1) 37%, rgba(186,48,255,1) 62%, rgba(0,232,212,1) 80%)',
        border:'none',
        borderRadius:'30px',
        fontWeight:'500',
        marginTop:'2rem'

    };

    return (
        <div style={mainContainer}>
        <div id="showcase" style={headerContainer}>
            <h1 style={{margin: 'auto', fontWeight:'800'}}>Loren Ipsun</h1>
            <div id="content" style={{margin: '5px'}}>
            <p>Provident similique accusantium nemo autem. </p> 
            <p>Veritatis obcaecati tenetur iure eius earum ut molestias </p>
            <p>architecto voluptate aliquam nihil eveniet aliquid culpa officia aut!</p>
            </div>
            <Button id="main-page-btn" variant="warning" style={gradientButton}>Start Now</Button>
        </div>
        <div class="image-header" style={headerContainer2}>
        <img src="/img/logo.png" alt="SR-logo" />
        </div>
        </div>

    )
}
