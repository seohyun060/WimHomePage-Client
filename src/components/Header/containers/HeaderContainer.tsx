import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Header from '../Header';
import { useLocation, useNavigate } from 'react-router-dom';

export const section: { [key: number]: string } = {
  0: '#main',
  1: '#business',
  2: '#history',
  3: '#partners',
  4: '#contact',
};

type Props = {
  page: number;
  onPageChanged: (page: number) => void;
};
const HeaderContainer = ({ page, onPageChanged }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isBlackMode = useMemo(() => {
    return (
      section[page] === '#partners' || location.pathname === '/contact-detail'
    );
  }, [page, location]);

  const onItemClicked = useCallback((page: number) => {
    onPageChanged(page);
    window.location.href = `/${section[page]}`;
  }, []);

  return (
    <Header
      page={page}
      onItemClicked={onItemClicked}
      isBlackMode={isBlackMode}
    />
  );
};

export default HeaderContainer;
