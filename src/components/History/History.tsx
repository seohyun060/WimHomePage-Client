import images from '@assets/images';
import { HistoryTypes } from '@typedef/components/history/history.types';
import React from 'react';
import './styles/history.styles.css';

type Props = {
  history: HistoryTypes;
  currentIdx: number;
  onPrevClicked: () => void;
  onNextClicked: () => void;
};

const History = ({
  history,
  currentIdx,
  onPrevClicked,
  onNextClicked,
}: Props) => {
  return (
    <div className='history-root' id='history'>
      <div className='layer' />
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
          <div className='list-container'>
            {Object.values(history)[currentIdx].map((item, idx) => {
              return (
                <div className='month-list' key={idx}>
                  <span className='time '>
                    {item.month.toString().padStart(2, '0')}
                  </span>
                  <div className='list-item'>
                    {item.list.map((listItem, idx) => {
                      return (
                        <span key={idx} className='history '>
                          {listItem}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
