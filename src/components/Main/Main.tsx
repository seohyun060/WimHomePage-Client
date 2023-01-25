import images from '@assets/images';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import './styles/main.styles.css';

type Props = {
  pointerRef: RefObject<HTMLDivElement>;
  backgroundRef: RefObject<HTMLDivElement>;
  mainRef: RefObject<HTMLDivElement>;
  titleRef: RefObject<HTMLHeadingElement>;
  descRef: RefObject<HTMLSpanElement>;
  buttonRef: RefObject<HTMLButtonElement>;
  scrollRef: RefObject<HTMLDivElement>;
  onButtonClicked: () => void;
};

const Main = ({
  pointerRef,
  backgroundRef,
  mainRef,
  titleRef,
  descRef,
  buttonRef,
  scrollRef,
  onButtonClicked,
}: Props) => {
  return (
    <div className='main-root' id='main'>
      <div ref={backgroundRef} className='background'>
        <video
          className='bg-video'
          src={images.mainVideo}
          controls={false}
          autoPlay
          muted
          loop
        />
        <div className='layer-black' />
        <div className='layer-blue' />
      </div>
      <div ref={mainRef} className='main-container'>
        <h1 ref={titleRef} className={`title`}>
          {'Imagination\nBecomes Reality'}
        </h1>
        <span
          ref={descRef}
          className={`description `}>{`여러가지 고객지향적 소프트웨어를 제작하여 고객들이 즐길 수 있는  공간, 편의를 \n누릴 수 있는 공간들을 제작하는 소프트웨어 전문회사 윔 입니다. `}</span>
        <button
          ref={buttonRef}
          className={`btn-solid-round inquiry `}
          onClick={onButtonClicked}>
          {'프로젝트 문의하기'}
        </button>
      </div>
      <div ref={scrollRef} className={`scroll-container `}>
        <span className='label'>{'Scroll down'}</span>
        <div className='scroll-anim'>
          <div className='ball' />
        </div>
      </div>
      <div className='pointer' ref={pointerRef} />
    </div>
  );
};

export default Main;
