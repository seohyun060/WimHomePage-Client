import { HistoryTypes } from '@typedef/components/history/history.types';
import React, { useCallback, useEffect, useRef } from 'react';
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
        month: 12,
        list: [
          '벤처기업 공시 (벤처확인번호 20221221030047)',
          `대구디지털혁신진흥원 SW인재양성 기반조성사업 산학협력 프로젝트 성과교류회 및 취업박람회 최우수 수상`,
          `대구테크노파크 RIS 성과공유형 대학-기업 협업 기술개발 및 실증 인프라 활용 제품화 지원사업 선정`,
        ],
      },
      {
        month: 11,
        list: [
          `한국데이터산업진흥원 데이터바우처 지원사업 공급기업 선정`,
          `특허출원 「객체 이동속도 추정 기능을 구비한 인공지능 기반의 재활용품 선별 장치」`,
        ],
      },
      {
        month: 10,
        list: ['연구개발특구진흥재단 ESG 창업아이디어 경진대회 수상'],
      },
      {
        month: 8,
        list: [
          '기업부설연구소 설립',
          '대구디지털혁신진흥원 지역SW기업 산학협력 프로젝트 지원사업 선정',
        ],
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
          '대구디지털혁신진흥원 지역SW기업 산학연계 단기 현장실습 프로그램 선정',
          '대구특구 이노폴리스캠퍼스 사업 선정',
        ],
      },
      {
        month: 5,
        list: [
          '대구테크노파크 지역밀착형 연구활동 지원사업 선정',
          '한국데이터산업진흥원 데이터바우처 지원사업 선정',
        ],
      },
      {
        month: 4,
        list: ['대한상공회의소 IP(지식재산)나래 프로그램 지원사업 선정'],
      },
      {
        month: 3,
        list: [
          '대구광역시 북구 청년창업경진대회 금상 수상',
          '중소벤처기업부 KOSME 청년창업사관학교 선정',
        ],
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

  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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
      rootRef={rootRef}
      listRef={listRef}
      history={history}
      currentIdx={currentIdx}
      onPrevClicked={onPrevClicked}
      onNextClicked={onNextClicked}
    />
  );
};

export default HistoryContainer;
