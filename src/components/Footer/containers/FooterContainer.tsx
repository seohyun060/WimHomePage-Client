import { InfoType } from '@typedef/components/Footer/footer.types';
import React from 'react';
import { useState } from 'react';
import Footer from '../Footer';

const FooterContainer = () => {
  const [info, setInfo] = useState<InfoType[]>([
    { title: '회사명', description: '주식회사 윔' },
    { title: '사업분야', description: '응용 소프트웨어 개발 및 공급업' },
    { title: '사업자등록번호', description: '507 - 86 - 02537' },
    { title: '대표', description: '전우진' },
    { title: '연락처', description: '010-9844-2434' },
    { title: '이메일', description: 'wim@wimcorp.co.kr' },
    {
      title: '주소',
      description: '대구광역시 북구 대학로 80  경북대학교 창업보육센터 308호',
    },
  ]);
  return <Footer info={info} />;
};

export default FooterContainer;
