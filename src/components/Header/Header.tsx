import images from '@assets/images';
import React from 'react';
import './styles/header.styles.css';
type Props = {
  headerColor: string;
};

const Header = ({ headerColor }: Props) => {
  return (
    <header className={`header-root${headerColor}`}>
      <div className='header-container'>
        <div className='logo'>
          <a href='#main'>
            {headerColor === '-black' ? (
              <img src={images.logoHeaderb} alt='logo' />
            ) : (
              <img src={images.logoHeaderW} alt='logo' />
            )}
          </a>
        </div>
        <ul className='gnb-container'>
          <li className='item eng-h3'>
            <a href='#business'>{'Business Field'}</a>
          </li>
          <li className='item eng-h3'>
            <a href='#history'>{'History'}</a>
          </li>
          <li className='item eng-h3'>
            <a href='#partners'>{'Partners'}</a>
          </li>
          <li className='item eng-h3'>
            <a href='#contact'>{'Contact Us'}</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
