import images from '@assets/images';
import React from 'react';
import './styles/main.styles.css';

const Main = () => {
  return (
    <div className='main-root' id='main'>
      <div className='main-container'>
        <div className='slogan-container'>
          <h1 className='eng-h1 white'>{'Imagination\nBecomes Reality'}</h1>
          <span className='kor-h3 gray2'>{`여러가지 고객지향적 소프트웨어를 제작하여 고객들이 즐길 수 있는  공간, 편의를 
누릴 수 있는 공간들을 제작하는 소프트웨어 전문회사 윔 입니다. `}</span>
        </div>
      </div>
      <video
        className='bg-video'
        src={images.mainVideo}
        controls={false}
        autoPlay={true}
      />
    </div>
  );
};

export default Main;
