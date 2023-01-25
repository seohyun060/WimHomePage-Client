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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContainer from './Home/containers/HomeContainer';
import ContactDetailContainer from './Contact/containers/ContactDetailContainer';

function App() {
  const { rootRef, wheelHandler, page, onPageChanged, scrollHandler } =
    useScroll();

  // useEffect(() => {
  //   rootRef.current?.addEventListener('wheel', wheelHandler);
  //   // document.addEventListener('scroll', scrollHandler);

  //   return () => {
  //     rootRef.current?.removeEventListener('wheel', wheelHandler);
  //   };
  // }, []);

  return (
    <BrowserRouter>
      <div ref={rootRef} className='homepage-root'>
        <HeaderContainer page={page} onPageChanged={onPageChanged} />
        <Routes>
          <Route index element={<HomeContainer />} />
          <Route path='/contact-detail' element={<ContactDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
