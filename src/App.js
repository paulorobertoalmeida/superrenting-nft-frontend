import './App.css'
import React from 'react'
import PageNavbar from './components/main/PageNavbar'
import Header from './components/main/Header'
import MarketPlace from './components/main/MarketPlace'
import LastRented from './components/main/LastRented'
import AboutUs from './components/main/AboutUs'
import LorenIpsun from './components/main/LorenIpsun'
import TopRenters from './components/main/TopRenters'
import Games from './components/main/Games'
import SocialMedia from './components/main/SocialMedia'
import Footer from './components/main/Footer'
import useWeb3Modal from "./hooks/useWeb3Modal"

function App() {
  const lpContainer = {
    background: 'rgb(4,1,32)',
    background: 'linear-gradient(45deg, rgba(4,1,32,1) 6%, rgba(21,1,53,1) 87%)',
    color: 'white'
};
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  console.log("Here");
  console.log(provider);
  console.log(loadWeb3Modal);
  console.log(logoutOfWeb3Modal);
  

  return (
    <div style={lpContainer}>
      <PageNavbar 
      provider={provider}
      loadWeb3Modal={loadWeb3Modal}
      logoutOfWeb3Modal={logoutOfWeb3Modal}
      />
      <Header />
      <MarketPlace />
      {/* <LorenIpsun />
      <LastRented />
      <AboutUs />
      <TopRenters />
      <Games />
      <SocialMedia /> */}
      <Footer />
    </div>
  );
}

export default App;
