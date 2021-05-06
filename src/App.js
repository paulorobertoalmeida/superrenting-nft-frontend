import './App.css'
import React from 'react'
import PageNavbar from './components/header/PageNavbar'
import Header from './components/header/Header'
import MarketPlace from './components/main/MarketPlace'
import LastRented from './components/last-rented/LastRented'
import AboutUs from './components/about/AboutUs'
import LorenIpsun from './components/main/extras/LorenIpsun'
import TopRenters from './components/last-rented/TopRenters'
import Games from './components/games/Games'
import SocialMedia from './components/socialmedia/SocialMedia'
import Footer from './components/footer/Footer'
import useWeb3Modal from './hooks/useWeb3Modal'


import {GlobalStyleComponent} from './components/global-styles/global-fe-style'



function App() {
 
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  console.log("Here");
  console.log(provider);
  console.log(loadWeb3Modal);
  console.log(logoutOfWeb3Modal);
  

  return (
    
      <GlobalStyleComponent>
        <PageNavbar 
        provider={provider}
        loadWeb3Modal={loadWeb3Modal}
        logoutOfWeb3Modal={logoutOfWeb3Modal}
        />
        <Header />
        <MarketPlace />
         <LorenIpsun />
        <LastRented />
        <AboutUs />
        <TopRenters />
        <Games />
        <SocialMedia /> 
        <Footer />
      </GlobalStyleComponent>
    
  );
}

export default App;
