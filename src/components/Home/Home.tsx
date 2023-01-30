import BusinessFieldContainer from '@components/BusinessField/containers/BusinessFieldContainer';
import HistoryContainer from '@components/History/containers/HistoryContainer';
import MainContainer from '@components/Main/containers/MainContainer';
import PartnersContainer from '@components/Partners/containers/PartnersContainer';
import React from 'react';
import ContactContainer from '@components/Contact/containers/ContactContainer';
const Home = () => {
  return (
    <>
      <MainContainer />
      <BusinessFieldContainer />
      <HistoryContainer />
      <PartnersContainer />
      <ContactContainer />
    </>
  );
};

export default Home;
