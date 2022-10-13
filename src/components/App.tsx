import React from 'react';
import BusinessFieldContainer from './BusinessField/containers/BusinessFieldContainer';
import ContactContainer from './Contact/containers/ContactContainer';
import Footer from './Footer/Footer';
import HeaderContainer from './Header/containers/HeaderContainer';
import HistoryContainer from './History/containers/HistoryContainer';
import MainContainer from './Main/containers/MainContainer';
import PartnersContainer from './Partners/containers/PartnersContainer';
import '@styles/core.css';

function App() {
  return (
    <div className='homepage-root'>
      <HeaderContainer />
      <MainContainer />
      <BusinessFieldContainer />
      <HistoryContainer />
      <PartnersContainer />
      <ContactContainer />
      <Footer />
    </div>
  );
}

export default App;
