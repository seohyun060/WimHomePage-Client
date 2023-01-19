import images from '@assets/images';
import React, { RefObject } from 'react';
import './styles/main.styles.css';

type Props = {
  pointerRef: RefObject<HTMLDivElement>;
  onButtonClicked: () => void;
};

const Main = ({ pointerRef, onButtonClicked }: Props) => {
  return (
    <div className='main-root' id='main'>
      <div className='background'>
        <video
          className='bg-video'
          src={images.mainVideo}
          controls={false}
          autoPlay
          muted
          loop
        />
        <div className='layer1' />
        <div className='layer2' />
      </div>
      <div className='main-container'>
        <h1 className='title'>{'Imagination\nBecomes Reality'}</h1>
        <span className='description'>{`여러가지 고객지향적 소프트웨어를 제작하여 고객들이 즐길 수 있는  공간, 편의를 \n누릴 수 있는 공간들을 제작하는 소프트웨어 전문회사 윔 입니다. `}</span>
        <button className='btn-solid-round inquiry' onClick={onButtonClicked}>
          {'프로젝트 문의하기'}
        </button>
      </div>
      <div className='scroll-container'>
        <span className='label'>{'Scroll down'}</span>
        <div className='scroll-anim'>
          <div className='ball' />
        </div>
      </div>
      <div ref={pointerRef} className='pointer' />
    </div>
  );
};

export default Main;
