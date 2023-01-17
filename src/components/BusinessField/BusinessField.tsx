import images from '@assets/images';
import {
  BusinessListItemTypes,
  BusinessTypes,
} from '@typedef/components/Business/business.types';
import React from 'react';
import './styles/business.field.styles.css';

type Props = {
  currentIdx: number;
  businessList: BusinessListItemTypes[];
  onBusinessClicked: (idx: number) => void;
};

const BusinessField = ({
  currentIdx,
  businessList,
  onBusinessClicked,
}: Props) => {
  return (
    <div
      className={`bf-root ${businessList[currentIdx].business}`}
      id='business'>
      <div className='layer' />
      <div className='main-container'>
        <div className=''>
          <div className='title-container'>
            <h1 className='title eng-h1 black'>{'Business'}</h1>
            <span className='kor-h3 black description'>{`우리는 AI와 플랫폼의 결합을\n통해 주변의 일상생활을\n편리하게 변화시키고 있습니다.`}</span>
          </div>
          <div className='pagination-container'>
            <div className='page'>
              <span className='eng-h3 black'>{(currentIdx % 3) + 1}</span>
              <div className='line' />
              <span className='eng-h3 black'>{'3'}</span>
            </div>
            <div className='button-container'>
              <button
                className='button'
                onClick={() => onBusinessClicked(currentIdx - 1)}>
                <img src={images.leftBtnB} alt='left-button' />
              </button>
              <button
                className='button'
                onClick={() => onBusinessClicked(currentIdx + 1)}>
                <img src={images.rightBtnB} alt='right-button' />
              </button>
            </div>
          </div>
        </div>
        <div className='carousel-container'>
          {businessList.map((item, idx) => {
            const isActive = idx === currentIdx;

            return (
              <div
                className={`item kor-h4 ${item.business} ${
                  isActive ? 'active' : ''
                } ${
                  idx > currentIdx && idx < currentIdx + 3 ? 'inactive' : ''
                }`}
                onClick={() => onBusinessClicked(idx)}>
                <div className='item-desc-container'>
                  <div className='title kor-h1 white'>{item.title}</div>
                  <div
                    className={`subtitle eng-h3 white ${
                      isActive ? 'invisible' : ''
                    }`}>
                    {item.subtitle}
                  </div>
                  <p
                    className={`description kor-h4 white ${
                      !isActive ? 'invisible' : ''
                    }`}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BusinessField;
