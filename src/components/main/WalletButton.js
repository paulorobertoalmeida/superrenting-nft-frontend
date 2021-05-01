import React from 'react'
import styled from 'styled-components'


export function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  console.log("provider");

  const WalletStyleButton = styled.button`
    background-color: transparent;
    border: 5px solid white;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    margin: 5px 20px;
    padding: 8px 20px;

    &:hover {
    color: purple;
    }
  `;

  return (
    <WalletStyleButton
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {!provider ? "Connect Wallet" : "Disconnect Wallet"}
    </WalletStyleButton>
  );
}
