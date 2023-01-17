import {
  BusinessListItemTypes,
  BusinessTypes,
} from '@typedef/components/Business/business.types';
import React, { useCallback, useEffect, useState } from 'react';
import BusinessField from '../BusinessField';

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

  const onBusinessClicked = useCallback(
    (idx: number) => {
      setCurrentIdx(idx < 0 ? businessList.length - 1 : idx);
    },
    [businessList],
  );

  useEffect(() => {
    if (currentIdx + 5 > businessList.length)
      setBusinessList((prev) => {
        const clone = [...prev];
        const tmp = clone.slice(0, 3);
        clone.push(...tmp);
        return clone;
      });
  }, [currentIdx]);

  return (
    <BusinessField
      currentIdx={currentIdx}
      businessList={businessList}
      onBusinessClicked={onBusinessClicked}
    />
  );
};

export default BusinessFieldContainer;
