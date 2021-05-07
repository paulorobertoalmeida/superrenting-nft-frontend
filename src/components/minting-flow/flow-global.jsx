import styled from 'styled-components'


export const MainContainerFlow = styled.div`
      display: flex;
            flex-direction:column;
            width: 90%; 
            height: 800px;
            background: rgb(131,58,180);
            background: linear-gradient(29deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
            margin: auto; 
            padding:auto;
            border-radius: 2em;
`;

export const  InnerContainerFlow = styled.div`

`;

export const ContentFlow = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;

export const NFTDisplay = styled.div`
    background-color: #fff;
    width: 18rem;
    height: 18rem;
    color: #000;
`;

export const Text = styled.h1`
    margin: 5px;
    padding 1rem;
    color: #fff;
    font-weight: 500;
`;

export const Paragraph = styled.p`
    margin-top: 1rem;
    color: #fff;
`;