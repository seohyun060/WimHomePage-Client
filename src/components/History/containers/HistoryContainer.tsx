import { HistoryTypes } from '@typedef/components/history/history.types';
import React, { useCallback } from 'react';
import { useState } from 'react';
import History from '../History';

const HistoryContainer = () => {
  const [currentIdx, setCurrentIdx] = useState(1);

  const [history, setHistory] = useState<HistoryTypes>({
    2021: [
      {
        month: 12,
        list: ['경북대학교 창업성과발표회 1위'],
      },

      {
        month: 8,
        list: [
          '와이앤아처 유망 로봇기업 투자 활성화 사업 인공지능 부문 선정',
          '대구 소셜벤처플러스 육성사업 투자연계형 프로그램 선정',
        ],
      },
      {
        month: 5,
        list: ['전국학생창업유망팀 U300선정'],
      },
    ],
    2022: [
      {
        month: 8,
        list: ['기업부설연구소 설립'],
      },
      {
        month: 7,
        list: [
          `“인공지능 기반의 재활용품 선별 장치” 특허출원(10-2022-0084895)`,
        ],
      },
      {
        month: 6,

        list: [
          'NICE평가정보 기술평가 우수기업 인증',
          '신용보증재단 스텝업 도전기업 선정',
        ],
      },
      {
        month: 4,
        list: ['대구광역시 북구 청년창업경진대회 금상 수상'],
      },
      {
        month: 3,
        list: ['중소벤처기업부 KOSME 청년창업사관학교 선정'],
      },
      {
        month: 2,
        list: [
          '대구 테크노파크 START LINE startup-Bible 선정',
          '제2회 연구개발특구 인공지능 경진대회 AI SPARK 챌린지 전국 2위',
        ],
      },
    ],
  });

  const onPrevClicked = useCallback(() => {
    const lastIdx = Object.keys(history).length - 1;
    setCurrentIdx((prev) => {
      return prev - 1 < 0 ? lastIdx : prev - 1;
    });
  }, [history]);

  const onNextClicked = useCallback(() => {
    const lastIdx = Object.keys(history).length - 1;
    setCurrentIdx((prev) => {
      return prev + 1 > lastIdx ? 0 : prev + 1;
    });
  }, [history]);

  return (
    <History
      history={history}
      currentIdx={currentIdx}
      onPrevClicked={onPrevClicked}
      onNextClicked={onNextClicked}
    />
  );
};

export default HistoryContainer;
