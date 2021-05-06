import styled from 'styled-components'



export  const GlobalStyleComponent = styled.div`
    background: rgb(4,1,32);
    background: linear-gradient(45deg, rgba(4,1,32,1) 6%, rgba(21,1,53,1) 87%);
    color: white;
`;

export const MintingContainer = styled.div`
            display: flex;
            flex-direction:column;
            width: 90%; 
            height: 800px;
            background: rgb(131,58,180);
            background: linear-gradient(29deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
            margin: auto; 
            padding:auto;
            border-radius: 2em;
        & > h1 { 
            margin: 5px;
            padding 1rem;
        }

        & > p { 
            margin-top: 1rem;
        }
    `;