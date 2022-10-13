import { HistoryTypes } from '@typedef/components/history/history.types';
import React from 'react';
import { useState } from 'react';
import History from '../History';

const HistoryContainer = () => {
  const [history, setHistory] = useState<HistoryTypes[]>([
    {
      time: '2022.08',
      list: ['기업부설연구소 설립'],
    },
    {
      time: '2022.07',
      list: [`“인공지능 기반의 재활용품 선별 장치” 특허출원(10-2022-0084895)`],
    },
    {
      time: '2022.06',
      list: [
        'NICE평가정보 기술평가 우수기업 인증',
        '신용보증재단 스텝업 도전기업 선정',
      ],
    },
    {
      time: '2022.04',
      list: ['대구광역시 북구 청년창업경진대회 금상 수상'],
    },
    {
      time: '2022.03',
      list: ['중소벤처기업부 KOSME 청년창업사관학교 선정'],
    },
    {
      time: '2022.02',
      list: [
        '대구 테크노파크 START LINE startup-Bible 선정',
        '제2회 연구개발특구 인공지능 경진대회 AI SPARK 챌린지 전국 2위',
      ],
    },
    {
      time: '2021.12',
      list: ['경북대학교 창업성과발표회 1위'],
    },
    {
      time: '2021.05',
      list: ['전국학생창업유망팀U300선정'],
    },
    {
      time: '2021.08',
      list: [
        '와이앤아처 유망 로봇기업 투자 활성화 사업 인공지능 부문 선정',
        '대구 소셜벤처플러스 육성사업 투자연계형 프로그램 선정',
      ],
    },
  ]);

  return <History history={history} />;
};

export default HistoryContainer;
