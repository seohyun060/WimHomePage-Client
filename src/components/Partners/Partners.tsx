import images from '@assets/images';
import React from 'react';
import './styles/partners.styles.css';

type Props = {
  partners: string[];
};

const Partners = ({ partners }: Props) => {
  return (
    <div className='partners-root' id='partners'>
      <div className='title-container'>
        <h1 className='title'>{'Partners'}</h1>
      </div>

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
