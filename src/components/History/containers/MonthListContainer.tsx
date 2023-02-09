import { HistoryMonthItemTypes } from '@typedef/components/history/history.types';
import React, { useEffect, useRef } from 'react';
import MonthList from '../components/MonthList';

type Props = {
  monthItem: HistoryMonthItemTypes;
};

const MonthListContainer = ({ monthItem }: Props) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const historyScrollHandler = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.9) {
          entry.target.classList.add('visible');
        } else if (entry.intersectionRatio < 0.1) {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(historyScrollHandler, {
      threshold: new Array(11).fill(0).map((v, i) => i * 0.1),
    });

    observer.observe(item);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <MonthList monthItem={monthItem} itemRef={itemRef} />;
};

export default MonthListContainer;
