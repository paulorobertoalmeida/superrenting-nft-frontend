import React from 'react';
import {Button} from 'react-bootstrap';



export function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  console.log("provider");

  const styleButton = {
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '8px',
    color: '#282c34',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight:'500',
    textAlign: 'center',
    textDecoration: 'none',
    margin: '5px 20px',
    padding: '12px 24px',
  }
  return (
    <Button style={styleButton}
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {!provider ? "Connect Wallet" : "Disconnect Wallet"}
    </Button>
  );
}
