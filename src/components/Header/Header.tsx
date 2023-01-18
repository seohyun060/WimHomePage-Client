import images from '@assets/images';
import React from 'react';
import './styles/header.styles.css';

type Props = {
  page: number;
  onItemClicked: (page: number) => void;
};

const Header = ({ page, onItemClicked }: Props) => {
  return (
    <header
      className={`header-root${page === 3 ? '-black' : ''} ${
        page > 0 ? 'blur' : ''
      }`}>
      <div className='header-container'>
        <div className='logo'>
          <a onClick={() => onItemClicked(0)}>
            <img
              src={page === 3 ? images.logoHeaderb : images.logoHeaderW}
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
