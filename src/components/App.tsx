import React, { useEffect } from 'react';
import BusinessFieldContainer from './BusinessField/containers/BusinessFieldContainer';
import ContactContainer from './Contact/containers/ContactContainer';
import Footer from './Footer/Footer';
import HeaderContainer from './Header/containers/HeaderContainer';
import HistoryContainer from './History/containers/HistoryContainer';
import MainContainer from './Main/containers/MainContainer';
import PartnersContainer from './Partners/containers/PartnersContainer';
import '@styles/core.css';
import FooterContainer from './Footer/containers/FooterContainer';
import { useScroll } from '@hooks/useScroll';

function App() {
  const { rootRef, wheelHandler, page } = useScroll();

  useEffect(() => {
    rootRef.current?.addEventListener('wheel', wheelHandler);

    return () => {
      rootRef.current?.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  return (
    <div ref={rootRef} className='homepage-root'>
      <HeaderContainer page={page} />
      <MainContainer />
      <BusinessFieldContainer />
      {/* <HistoryContainer /> */}
      {/* <PartnersContainer /> */}
      {/* <ContactContainer /> */}
      {/* <FooterContainer /> */}
    </div>
  );
}

export default App;
