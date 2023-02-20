import BusinessFieldContainer from '@components/BusinessField/containers/BusinessFieldContainer';
import ContactContainer from '@components/Contact/containers/ContactContainer';
import FooterContainer from '@components/Footer/containers/FooterContainer';
import HistoryContainer from '@components/History/containers/HistoryContainer';
import MainContainer from '@components/Main/containers/MainContainer';
import PartnersContainer from '@components/Partners/containers/PartnersContainer';
import React from 'react';
const Home = () => {
  return (
    <>
      <MainContainer />
      <BusinessFieldContainer />
      <HistoryContainer />
      <PartnersContainer />
      <ContactContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
