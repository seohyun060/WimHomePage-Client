import images from '@assets/images';
import {
  BusinessListItemTypes,
  BusinessTypes,
} from '@typedef/components/Business/business.types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import BusinessField from '../BusinessField';
import _, { isFunction } from 'lodash';

let isScrolling = false;

const BusinessFieldContainer = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const [businessList, setBusinessList] = useState<BusinessListItemTypes[]>([
    {
      title: '인공지능 & 로봇',
      subtitle: 'AI & Robot',
      description:
        '윔은 프로그래밍 경진대회 수상자, 현직 연구원 등 AI 및 로봇 분야에서 활발히 활동하는 젊고 능력 있는 멤버들로 구성되어 있습니다. ',
      business: 'ai',
    },
    {
      title: '하드웨어',
      subtitle: 'Hardware',
      description:
        '하드웨어 설계 및 펌웨어 제작이 가능하며 다양한 프로젝트 경험을 바탕으로 시장의 요구사항에 알맞은 서비스 제공이 가능합니다.',
      business: 'hardware',
    },
    {
      title: '웹/앱',
      subtitle: 'Web/App',
      description:
        '기획/디자인/개발까지 윔에서  한번에 처리 가능하며  실력있는 대기업 전/현직 개발자들과 함께 협업하며 최고의 프로덕트를 만들고 있습니다.',
      business: 'webApp',
    },
  ]);

  const backgroundRef = useRef<HTMLImageElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const onBusinessClicked = useCallback(
    (idx: number) => {
      if (idx < 0 || idx > 2) {
        return;
      }

      setCurrentIdx(idx < 0 ? businessList.length - 1 : idx);
    },
    [businessList],
  );

  const businessFieldScrollHandler = useCallback(() => {
    const scrollTop = window.scrollY;
    const screenHeight = window.innerHeight;
    const screenWdith = window.innerWidth;

    if (screenWdith < 500) return;

    if (scrollTop < screenHeight * 2 || scrollTop > screenHeight * 3 + 1900)
      return;

    const offset = 486;
    const translateXStart = screenHeight * 2 + offset;
    const translateXEnd = screenHeight * 2 + offset * 3.2;
    const translateX = scrollTop - screenHeight * 2 - offset;

    const background = backgroundRef.current;
    const carousel = carouselRef.current;

    if (!(carousel && background)) return;

    if (scrollTop < translateXStart) {
      carousel.style.transform = `translate(0,0)`;
      return;
    }
    if (scrollTop > translateXEnd) {
      carousel.style.transform = `translate(-${1020}px,0)`;
      return;
    }

    // carousel.style.transform = `translate(-${translateX}px,0)`;

    if (translateX < offset) {
      setCurrentIdx(0);
      // background.style.backgroundImage = `url(${images.buisiness.ai})`;
    } else if (translateX < offset * 2) {
      setCurrentIdx(1);
      // background.style.backgroundImage = `url(${images.buisiness.hardware})`;
    } else if (translateX < offset * 3) {
      setCurrentIdx(2);
      // background.style.backgroundImage = `url(${images.buisiness.webApp})`;
    }
  }, [currentIdx]);

  useEffect(() => {
    window.addEventListener('scroll', businessFieldScrollHandler);
  }, []);

  return (
    <BusinessField
      rootRef={rootRef}
      carouselRef={carouselRef}
      backgroundRef={backgroundRef}
      currentIdx={currentIdx}
      businessList={businessList}
      onBusinessClicked={onBusinessClicked}
    />
  );
};

export default BusinessFieldContainer;
