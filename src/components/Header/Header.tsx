import images from '@assets/images';
import React from 'react';
import './styles/header.styles.css';

const Header = () => {
  return (
    <header className='header-root'>
      <div className='header-container'>
        <div className='logo'>
          <a href='#main'>
            <img src={images.logoHeader} alt='logo' />
          </a>
        </div>
        <ul className='gnb-container'>
          <li className='item'>
            <a href='#business'>{'Business Field'}</a>
          </li>
          <li className='item'>
            <a href='#history'>{'History'}</a>
          </li>
          <li className='item'>
            <a href='#partners'>{'Partners'}</a>
          </li>
          <li className='item'>
            <a href='#contact'>{'Contact Us'}</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;