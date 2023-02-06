import images from '@assets/images';
import { ContactFormType } from '@typedef/components/Contact/contact.types';
import CInput from '../components/CInput';

import React from 'react';
import '../styles/contact.detail.styles.css';
type Props = {
  contactForm: ContactFormType;
  onValueChanged: (
    key: keyof ContactFormType,
    value: string | File | null,
  ) => void;
  onSubmitClicked: () => void;
  checkToggle: boolean;
  onCheckToggle: () => void;
};
const ContactDetail = ({
  contactForm,
  onValueChanged,
  onSubmitClicked,
  checkToggle,
  onCheckToggle,
}: Props) => {
  return (
    <div className='contact-detail-root'>
      <div className='title-container'>
        <h1 className='title'>{'Contact Us'}</h1>
      </div>
      <hr className='title-line' />
      <p className='title-text'>
        문의사항을 남겨주시면 빠른 시일 내에
        <br />
        연락을 드리겠습니다.
      </p>
      <img className='request-download' src={images.downloadW} />
      <img className='backimg' src={images.contactDetail} />
      <img className='backimg-mobile' src={images.contactDetailMobile} />

      <div className='backimg-curtain' />
      <div className='main-container'>
        <div className='request'>프로젝트 문의하기</div>
        <hr className='request-line' />
        <form className='form'>
          <div className='input-container'>
            <CInput
              label='제목'
              id='title'
              placeholder='프로젝트 명을 입력해주세요.'
              value={contactForm.title}
              onValueChanged={(value) => onValueChanged('title', value)}
            />
            <CInput
              label='소속'
              id='company'
              placeholder='ex. 주식회사 윔'
              value={contactForm.company}
              onValueChanged={(value) => onValueChanged('company', value)}
            />
            <CInput
              label='성함'
              id='name'
              placeholder='성함을 입력해주세요.'
              value={contactForm.name}
              onValueChanged={(value) => onValueChanged('name', value)}
            />
            <CInput
              label='연락처'
              id='tel'
              placeholder='(-)를 제외한 연락처를 입력해주세요.'
              value={contactForm.tel}
              onValueChanged={(value) => onValueChanged('tel', value)}
            />
            <CInput
              label='이메일'
              id='email'
              placeholder='ex. wim@wimcorp.co.kr'
              value={contactForm.email}
              onValueChanged={(value) => onValueChanged('email', value)}
            />
            <div className='cinput-root file'>
              <div className='label'>첨부파일</div>
              <div className='box'>
                <span className='span'>{'10MB 이내 용량을 첨부해주세요.'}</span>
                <span className='input'>{contactForm.file?.name}</span>
                <input
                  type='file'
                  id={`input-file`}
                  placeholder='10MB 이내 용량을 첨부해주세요.'
                  onChange={(e) =>
                    onValueChanged(
                      'file',
                      e.target.files ? e.target.files[0] : null,
                    )
                  }
                  hidden
                />
              </div>
              <label htmlFor={`input-file`} className='button'>
                {'찾아보기'}
              </label>
            </div>
            <div className='cinput-root textarea'>
              <div className='label'>문의내용</div>
              <label htmlFor={`input-description`} className='box textarea'>
                <textarea
                  className='input'
                  id={`input-description`}
                  value={contactForm.description}
                  onChange={(e) =>
                    onValueChanged('description', e.target.value)
                  }
                />
              </label>
            </div>
          </div>
          <hr className='input-line' />
          <p className='input-text'>
            개인정보보호정책 내용
            <br />
            주식회사 페스카로는 고객 문의사항 접수 및 답변을 위해 아래와 같이
            개인정보를 수집, 이용합니다.
            <br />
            <br />
            목적: 고객 문의사항 접수 및 답변
            <br />
            항목: 이름, 직급, 부서, 회사명, 연락처(휴대전화 번호 또는 유선
            전화번호, 이메일 주소)
            <br />
            보유 기간: 수집일로부터 1년
            <br />
            서비스 이용에 필요한 최소한의 수집 및 이용에 동의하지 않을 수
            있으나, 동의를 거부할 경우 서비스 이용에 제한이 있을 수 있습니다.
          </p>
          <div className='checkbox-container'>
            {!checkToggle ? (
              <img
                className='checkbox-img'
                src={images.checkOff}
                onClick={onCheckToggle}
              />
            ) : (
              <img
                className='checkbox-img'
                src={images.checkOn}
                onClick={onCheckToggle}
              />
            )}
            <span className='checkbox-text purple'>{'[필수]'}</span>
            <span className='checkbox-text'>
              {'개인 정보의 수집 및 이용목적에 동의합니다'}
            </span>
          </div>
          <button
            className='submit-btn'
            onClick={(e) => {
              e.preventDefault();
              onSubmitClicked();
            }}>
            {'문의하기'}
          </button>
        </form>
        <img className='request-download-mobile' src={images.downloadB} />
      </div>
    </div>
  );
};

export default ContactDetail;
