import images from '@assets/images';
import React from 'react';
import './styles/partners.styles.css';

type Props = {
  partners: string[];
};

const Partners = ({ partners }: Props) => {
  return (
    <div className='partners-root' id='partners'>
      <h1 className='eng-h1'>{'Partners'}</h1>
      <h3 className='kor-h3'>
        {'윔은 기술력과 안정성, 신뢰성을 바탕으로 '}
        <br />
        {'파트너사들과 함께하고 있습니다.'}
      </h3>
      <img className='partners-logo' src={images.partnersBackground}></img>
      <div className='main-container'>
        {partners.map((item, idx) => {
          return (
            <div className='item'>
              <img src={item} alt='partners-logo' />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
