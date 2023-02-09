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
      <div className='footer-main'>
        <div className='location'>
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
        <img className='logo' src={images.logoFooter} />
      </div>
    </div>
  );
};

export default Footer;
