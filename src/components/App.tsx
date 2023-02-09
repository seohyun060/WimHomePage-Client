import React, { useCallback, useEffect, useState } from 'react';
import BusinessFieldContainer from './BusinessField/containers/BusinessFieldContainer';
import Footer from './Footer/Footer';
import HeaderContainer from './Header/containers/HeaderContainer';
import HistoryContainer from './History/containers/HistoryContainer';
import MainContainer from './Main/containers/MainContainer';
import PartnersContainer from './Partners/containers/PartnersContainer';
import '@styles/core.css';
import FooterContainer from './Footer/containers/FooterContainer';
import ContactContainer from './Contact/containers/ContactContainer';
import ContactFormContainer from './ContactForm/containers/ContactFormContainer';
import { useScroll } from '@hooks/useScroll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContainer from './Home/containers/HomeContainer';
import ContactDetailContainer from './Contact/containers/ContactDetailContainer';
import { HeaderModeType } from '@typedef/components/home.types';

export const HeaderContext = React.createContext({
  headerMode: { isBlack: false, isBlur: false },
  changeMode: (key: keyof HeaderModeType, value: boolean) => {},
});

function App() {
  const [headerMode, setHeaderMode] = useState<HeaderModeType>({
    isBlack: false,
    isBlur: false,
  });

  const changeMode = useCallback(
    (key: keyof HeaderModeType, value: boolean) => {
      setHeaderMode((prev) => {
        return { ...prev, [key]: value };
      });
    },
    [],
  );

  return (
    <BrowserRouter>
      <HeaderContext.Provider value={{ headerMode, changeMode }}>
        <div className='homepage-root'>
          <HeaderContainer />
          <Routes>
            <Route index element={<HomeContainer />} />
            <Route
              path='/contact-detail'
              element={<ContactDetailContainer />}
            />
          </Routes>
        </div>
      </HeaderContext.Provider>
    </BrowserRouter>
  );
}

export default App;
