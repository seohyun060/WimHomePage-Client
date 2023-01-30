import { HistoryMonthItemTypes } from '@typedef/components/history/history.types';
import React, { RefObject } from 'react';

type Props = {
  monthItem: HistoryMonthItemTypes;
  itemRef: RefObject<HTMLDivElement>;
};

const MonthList = ({ monthItem, itemRef }: Props) => {
  return (
    <div ref={itemRef} className='month-list'>
      <span className='time '>
        {monthItem.month.toString().padStart(2, '0')}
      </span>
      <div className='list-item'>
        {monthItem.list.map((listItem, idx) => {
          return (
            <span key={idx} className='history '>
              {listItem}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default MonthList;
