import images from '@assets/images';
import React from 'react';
import './styles/contact.styles.css';
const Contact = () => {
  return (
    <div className='contact-root' id='contact'>
      <div className='curtain' />
      <img className='contact-logo' src={images.contact} />
      <h1 className='eng-h1'>{'Contact us'}</h1>
      <h3 className='kor-h3'>
        {'문의사항을 남겨주시면 빠른 시일 내에'}
        <br />
        {'연락을 드리겠습니다.'}
      </h3>
    </div>
  );
};

export default Contact;
