import images from '@assets/images';
import React, { useEffect, useRef } from 'react';
import { section } from './containers/HeaderContainer';
import './styles/header.styles.css';
import { Link } from 'react-router-dom';
import { HeaderModeType } from '@typedef/components/home.types';

type Props = {
  headerMode: HeaderModeType;
  onItemClicked: (page: number) => void;
};

const Header = ({ headerMode, onItemClicked }: Props) => {
  return (
    <header
      className={`header-root${headerMode.isBlack ? '-black' : ''} ${
        headerMode.isBlur ? 'blur' : ''
      }`}>
      <div className='header-container'>
        <div className='logo'>
          <a onClick={() => onItemClicked(0)}>
            <img
              src={headerMode.isBlack ? images.logoHeaderb : images.logoHeaderW}
              alt='logo'
            />
          </a>
        </div>
        <ul className='gnb-container'>
          <li className='item eng-h3'>
            <a onClick={() => onItemClicked(1)}>{'Business Field'}</a>
          </li>
          <li className='item eng-h3'>
            <a onClick={() => onItemClicked(2)}>{'History'}</a>
          </li>
          <li className='item eng-h3'>
            <a onClick={() => onItemClicked(3)}>{'Partners'}</a>
          </li>
          <li className='item eng-h3'>
            <a onClick={() => onItemClicked(4)}>{'Contact Us'}</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
