import images from '@assets/images';
import React from 'react';
import './styles/contact.styles.scss';
const Contact = () => {
  return (
    <div className='contact-root' id='contact'>
      <div className='contact-main'>
        <div className='curtain' />
        <img className='contact-logo' src={images.contact} />
        <h1 className='eng-h1'>{'Contact us'}</h1>
        <h3 className='kor-h3'>
          {'문의사항을 남겨주시면 빠른 시일 내에'}
          <br />
          {'연락을 드리겠습니다.'}
        </h3>
        <a className='kor-h3-ask' href='/contact-detail'>
          {'프로젝트 문의하기'}
        </a>
      </div>
      <div className='footer'>
        <div className='footer-location'>
          <button>개인정보 처리 방침</button>
          <span>|</span>
          <button>서비스 이용약관</button>

          <p>
            회사명: 주식회사 윔 | 대표 : 전우진 | 연락처: 010-9844-2434
            <br />
            이메일: wim@wimcorp.co.kr | 사업분야: 응용 소프트웨어 개발 및 공급업
            <br />
            사업자등록번호: 507 - 86 - 02537 | 주소: 대구광역시 북구 대학로 80
            경북대학교 창업보육센터 308호
          </p>
          <br />
          <p>WIM Corp., Inc. All rights reserved</p>
        </div>
        <img className='footer-logo' src={images.logoFooter} />
      </div>
    </div>
  );
};

export default Contact;
