import images from '@assets/images';
import React from 'react';
import './styles/main.styles.css';

const Main = () => {
  return (
    <div className='main-root' id='main'>
      <div className='main-container'>
        <div className='slogan-container'>
          <h1>{'Imagination\nBecomes Reality'}</h1>
          <span>{'상상을 현실로 만드는 회사, 우리는 Wim입니다.'}</span>
        </div>
        <img src={images.mainBg} alt='bg-img' className='bg-image' />
      </div>
    </div>
  );
};

export default Main;
