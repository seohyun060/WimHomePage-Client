import images from '@assets/images';
import { HistoryTypes } from '@typedef/components/history/history.types';
import React, { RefObject } from 'react';
import MonthListContainer from './containers/MonthListContainer';
import './styles/history.styles.css';

type Props = {
  rootRef: RefObject<HTMLDivElement>;
  listRef: RefObject<HTMLDivElement>;
  history: HistoryTypes;
  currentIdx: number;
  observer: IntersectionObserver;
  onPrevClicked: () => void;
  onNextClicked: () => void;
};

const History = ({
  rootRef,
  listRef,
  history,
  currentIdx,
  observer,
  onPrevClicked,
  onNextClicked,
}: Props) => {
  return (
    <div ref={rootRef} className='history-root' id='history'>
      <div className='background'>
        <div className='img'>
          <div className='layer' />
        </div>
      </div>
      <div className='main-container'>
        <div className='title-container'>
          <h1 className='title'>{'History'}</h1>
          <div className='description'>{'윔이 만들어온 길입니다.'}</div>
        </div>
        <div className='content'>
          <div className='pagination-container'>
            <span className='year '>{Object.keys(history)[currentIdx]}</span>
            <div className='button-container'>
              <button className='button' onClick={onPrevClicked}>
                <img src={images.leftBtnW} alt='left-button' />
              </button>
              <button className='button' onClick={onNextClicked}>
                <img src={images.rightBtnW} alt='right-button' />
              </button>
            </div>
          </div>
          <div ref={listRef} className='list-container'>
            {Object.values(history)[currentIdx].map((item, idx) => {
              return (
                <MonthListContainer
                  monthItem={item}
                  key={`${item.list}${item.month}`}
                  observer={observer}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
