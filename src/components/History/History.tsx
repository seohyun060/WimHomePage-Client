import images from '@assets/images';
import { HistoryTypes } from '@typedef/components/history/history.types';
import React from 'react';
import './styles/history.styles.css';

type Props = {
  history: HistoryTypes[];
};

const History = ({ history }: Props) => {
  return (
    <div className='history-root' id='history'>
      <div className='title-container'>
        <h1 className='title'>{'History'}</h1>
        <img src={images.titleObjBig} alt='obj' className='obj' />
      </div>
      <div className='main-container'>
        <div className='timeline' />
        <div className='list-container'>
          {history.map((item, idx) => {
            return (
              <div className='item' key={idx}>
                <div className='dot' />
                <div className='content'>
                  <span className='time'>{item.time}</span>
                  <div className='history-container'>
                    {item.list.map((listItem, idx) => {
                      return (
                        <span key={idx} className='history'>
                          {listItem}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default History;
