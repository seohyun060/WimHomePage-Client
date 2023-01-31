import images from '@assets/images';
import React from 'react';
import './styles/contact.styles.css';

const Contact = () => {
  return (
    <div className='contact-root' id='contact'>
      <div className='background'>
        <img className='image' src={images.contact} />
        <div className='curtain' />
      </div>
      <div className='contact-main'>
        <h1 className='title'>{'Contact us'}</h1>
        <h3 className='description'>
          {'문의사항을 남겨주시면 빠른 시일 내에'}
          <br />
          {'연락을 드리겠습니다.'}
        </h3>
        <a className='button'>{'프로젝트 문의하기'}</a>
      </div>
    </div>
  );
};

export default Contact;
