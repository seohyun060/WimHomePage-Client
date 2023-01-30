import images from '@assets/images';
import {
  BusinessListItemTypes,
  BusinessTypes,
} from '@typedef/components/Business/business.types';
import React, { RefObject, useEffect, useRef } from 'react';
import './styles/business.field.styles.css';

type Props = {
  rootRef: RefObject<HTMLDivElement>;
  carouselRef: RefObject<HTMLDivElement>;
  backgroundRef: RefObject<HTMLImageElement>;
  currentIdx: number;
  businessList: BusinessListItemTypes[];
  onBusinessClicked: (idx: number) => void;
};

const BusinessField = ({
  rootRef,
  carouselRef,
  backgroundRef,
  currentIdx,
  businessList,
  onBusinessClicked,
}: Props) => {
  return (
    <div ref={rootRef} className={`bf-root `} id='business'>
      <div className='bf-fixed-root'>
        <div
          ref={backgroundRef}
          className={`background  ${businessList[currentIdx].business}`}
        />
        <div className='layer' />
        <div className='main-container'>
          <div>
            <div className='title-container'>
              <h1 className='title'>{'Business'}</h1>
              <span className='description'>{`우리는 AI와 플랫폼의 결합을\n통해 주변의 일상생활을\n편리하게 변화시키고 있습니다.`}</span>
            </div>
            <div className='pagination-container'>
              <div className='page'>
                <span>{(currentIdx % 3) + 1}</span>
                <div className='line' />
                <span>{'3'}</span>
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
            <div
              className='items'
              ref={carouselRef}
              style={{
                transform: `translate(-${
                  currentIdx *
                  (window.innerWidth < 500 ? window.innerWidth - 12 : 506)
                }px,0)`,
              }}>
              {businessList.map((item, idx) => {
                return (
                  <div className={`item  ${item.business}`}>
                    <div className='item-desc-container'>
                      <div className='title '>{item.title}</div>
                      <p className={`description`}>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessField;
