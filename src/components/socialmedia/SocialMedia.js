import React from 'react'

export default function SocialMedia() {
const mainStyle={
    display:'flex',
    flexDirection:'column',
    alignContent:'center',
    justifyContent:'center',
    margin:'3rem',
    };

    const smStyle = {
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        margin:'auto',
        padding:'2rem',
        width:'50%'

    };
    const roundedStyle = {
        
        width: '100px',
        height: '100px',
        backgroundColor: '#fff',
        display: 'inline-block',
        margin:'auto',
        borderRadius:'50%',
        
    };

    return (
        <div style={mainStyle}>
        <h1 style={{margin:'auto'}}>Social Media</h1>
        <div style={smStyle}>
            <div style={{margin:'5px'}}>
                <span style={roundedStyle}></span>
            </div>
            <div style={{margin:'5px'}}>
                <span style={roundedStyle}></span>
            </div>
            <div style={{margin:'5px'}}>
                <span style={roundedStyle}></span>
            </div>
            <div style={{margin:'5px'}}>
            <span style={roundedStyle}></span>
            </div>
        </div> 
        </div>
    )
}
