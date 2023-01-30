import React, { useCallback, useEffect, useState } from 'react';
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
import { HeaderModeType } from '@typedef/components/home.types';

export const HomeContext = React.createContext({
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
    <HomeContext.Provider value={{ headerMode, changeMode }}>
      <BrowserRouter>
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
      </BrowserRouter>
    </HomeContext.Provider>
  );
}

export default App;
