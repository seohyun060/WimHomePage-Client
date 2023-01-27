import { HistoryMonthItemTypes } from '@typedef/components/history/history.types';
import React, { useEffect, useRef } from 'react';
import MonthList from '../components/MonthList';

type Props = {
  monthItem: HistoryMonthItemTypes;
  observer: IntersectionObserver;
};

const MonthListContainer = ({ observer, monthItem }: Props) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    observer.observe(item);

    return () => {
      observer.unobserve(item);
    };
  }, []);

  return <MonthList monthItem={monthItem} itemRef={itemRef} />;
};

export default MonthListContainer;
