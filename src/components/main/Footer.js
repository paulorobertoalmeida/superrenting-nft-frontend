import React from 'react'
import {Form, Button} from 'react-bootstrap'


export default function Footer() {
    const mainFooter={
        height:'400px',
        margin:'3rem',
        padding:'2rem'
    };

    const newsLetter={
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        width:'40%',
        height:'150px',
        padding:'2rem',
        margin:'auto'
    };

    const linksStyle={
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        width:'60%',
        height:'150px',
        margin:'auto'
    };

    const links ={
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        justifyContent:'center',
        width:'30%',
        padding:'auto',
        margin:'5rem'
        
    };

    const copyrightStyle = {
        display:'flex',
        alignContent:'center',
        justifyContent:'center',
        padding:'auto',
        
    };

    return (
        <div style={mainFooter}>
            <div >
            {/* <Form style={newsLetter}>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" style={{width:'100%'}}/>
                </Form.Group>
                <Button variant="primary" type="submit" style={{margin:'30px', height:'40px'}}>
                    Submit
                </Button>
            </Form> */}
            </div>
            <div style={linksStyle}>
                <div style={links}>
                    <a>Telegram</a><p></p>
                    <a>Careers</a><p></p>
                    <a>Affiliates</a>
                </div>
                <div style={links}>
                    <a>Github</a><p></p>
                    <a>Docs</a><p></p>
                    <a>Team</a>
                </div>
                <div style={links}>
                    <a>Protocols</a><p></p>
                    <a>Partners</a><p></p>
                    <a>Gradient Paper</a>
                    </div>
                </div>  
            <div style={copyrightStyle}>
            <p>SuperRenting&copy;</p>
            </div> 
        </div>
    )
}
