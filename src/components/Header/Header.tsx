import images from '@assets/images';
import React from 'react';
import './styles/header.styles.css';

type Props = {
  page: number;
};

const Header = ({ page }: Props) => {
  return (
    <header className={`header-root ${page > 0 ? 'blur' : ''}`}>
      <div className='header-container'>
        <div className='logo'>
          <a href='#main'>
            <img src={images.logoHeaderW} alt='logo' />
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
