import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Header from '../Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { HomeContext } from '@components/App';

export const section: { [key: number]: string } = {
  0: '#main',
  1: '#business',
  2: '#history',
  3: '#partners',
  4: '#contact',
};

const HeaderContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { headerMode } = useContext(HomeContext);

  const onItemClicked = useCallback((page: number) => {
    window.location.href = `/${section[page]}`;
  }, []);

  return <Header onItemClicked={onItemClicked} headerMode={headerMode} />;
};

export default HeaderContainer;
