import images from '@assets/images';
import { InfoType } from '@typedef/components/Footer/footer.types';
import React from 'react';
import './styles/footer.styles.css';

type Props = {
  info: InfoType[];
};

const Footer = ({ info }: Props) => {
  return (
    <div className='footer-root'>
      <div className='main-container'>
        <div className='terms-container'>
          <div className='terms'>
            <a href={images.privacy} target='_blank'>
              {'개인정보 처리방침'}
            </a>
          </div>
          <div className='bar' />
          <div className='terms'>
            <a href={images.terms} target='_blank'>
              {'서비스 이용약관'}
            </a>
          </div>
        </div>
        <div className='container'>
          <div className='info-container'>
            <div className='col'>
              {info.slice(0, 3).map((item, idx) => {
                return (
                  <div className='item' key={idx}>
                    <span className='title'>{item.title}</span>
                    <span className='description'>{item.description}</span>
                  </div>
                );
              })}
            </div>
            <div className='col'>
              {info.slice(3, 6).map((item, idx) => {
                return (
                  <div className='item' key={idx}>
                    <span className='title'>{item.title}</span>
                    <span className='description'>{item.description}</span>
                  </div>
                );
              })}
            </div>
            <div className='col'>
              {info.slice(6).map((item, idx) => {
                return (
                  <div className='item' key={idx}>
                    <span className='title'>{item.title}</span>
                    <span className='description'>{item.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='logo-container'>
            <img src={images.logoFooter} alt='wim-logo' />
            <span>{'WIM Corp., Inc. All rights reserved'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
