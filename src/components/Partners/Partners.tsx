import images from '@assets/images';
import React, { RefObject } from 'react';
import './styles/partners.styles.css';

type Props = {
  partners: string[];
  mainRef: RefObject<HTMLDivElement>;
};

const Partners = ({ partners, mainRef }: Props) => {
  return (
    <div className='partners-root' id='partners'>
      <img className='partners-layer' src={images.partnersBackground} />
      <h1 className='title'>{'Partners'}</h1>
      <h3 className='description'>
        {'윔은 기술력과 안정성, 신뢰성을 바탕으로 '}
        <br />
        {'파트너사들과 함께하고 있습니다.'}
      </h3>
      <div ref={mainRef} className='main-container'>
        {partners.map((item, idx) => {
          return (
            <div className='item' key={idx}>
              <img src={item} alt='partners-logo' />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
