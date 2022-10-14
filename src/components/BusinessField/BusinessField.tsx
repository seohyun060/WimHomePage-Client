import images from '@assets/images';
import React from 'react';
import './styles/business.field.styles.css';

const BusinessField = () => {
  return (
    <div className='bf-root' id='business'>
      <div className='title-container'>
        <h1 className='title'>{'Business Field'}</h1>
        <img src={images.titleObjBig} alt='obj' className='obj' />
      </div>
      <div className='main-container'>
        <div className='item'>
          <img src={images.buisiness.hardware} alt='hardware' />
          <div className='title'>{'하드웨어'}</div>
          <p className='subtitle'>
            {
              '하드웨어 설계 및 펌웨어 제작이 가능하며 다양한 프로젝트 경험을 바탕으로 시장의 요구사항에 알맞은 서비스 제공이 가능합니다.'
            }
          </p>
        </div>
        <div className='item'>
          <img src={images.buisiness.webApp} alt='hardware' />
          <div className='title'>{'웹/앱'}</div>
          <p className='subtitle'>
            {
              '기획/디자인/개발까지 윔에서  한번에 처리 가능하며  실력있는 대기업 전/현직 개발자들과 함께 협업하며 최고의 프로덕트를 만들고 있습니다. '
            }
          </p>
        </div>
        <div className='item'>
          <img src={images.buisiness.ai} alt='hardware' />
          <div className='title'>{'인공지능 & 로봇'}</div>
          <p className='subtitle'>
            {
              '윔은 프로그래밍 경진대회 수상자, 현직 연구원 등 AI 및 로봇 분야에서 활발히 활동하는 젊고 능력 있는 멤버들로 구성되어 있습니다. '
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessField;
