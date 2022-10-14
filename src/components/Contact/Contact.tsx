import { ContactFormType } from '@typedef/components/Contact/contact.types';
import React from 'react';
import CInput from './components/CInput';
import './styles/contact.styles.css';
import './styles/cinput.styles.css';
import images from '@assets/images';

type Props = {
  contactForm: ContactFormType;
  onValueChanged: (
    key: keyof ContactFormType,
    value: string | File | null,
  ) => void;
  onSubmitClicked: () => void;
};

const Contact = ({ contactForm, onValueChanged, onSubmitClicked }: Props) => {
  return (
    <div className='contact-root' id='contact'>
      <div className='title-container'>
        <h1 className='title'>{'Contact Us'}</h1>
        <img src={images.titleObjBig} alt='obj' className='obj' />
      </div>
      <div className='main-container'>
        <form className='form'>
          <div className='input-container'>
            <CInput
              label='제목'
              id='title'
              value={contactForm.title}
              onValueChanged={(value) => onValueChanged('title', value)}
            />
            <CInput
              label='소속'
              id='company'
              value={contactForm.company}
              onValueChanged={(value) => onValueChanged('company', value)}
            />
            <CInput
              label='성함'
              id='name'
              value={contactForm.name}
              onValueChanged={(value) => onValueChanged('name', value)}
            />
            <CInput
              label='연락처'
              id='tel'
              value={contactForm.tel}
              onValueChanged={(value) => onValueChanged('tel', value)}
            />
            <CInput
              label='이메일'
              id='email'
              value={contactForm.email}
              onValueChanged={(value) => onValueChanged('email', value)}
            />
            <div className='cinput-root'>
              <div className='label'>
                <span className='span'>{'첨부파일'}</span>
                <span className='input'>{contactForm.file?.name}</span>
                <input
                  type='file'
                  id={`input-file`}
                  onChange={(e) =>
                    onValueChanged(
                      'file',
                      e.target.files ? e.target.files[0] : null,
                    )
                  }
                  hidden
                />
                <label htmlFor={`input-file`} className='button'>
                  {'파일선택'}
                </label>
              </div>
            </div>
          </div>
          <div className='cinput-root textarea'>
            <label htmlFor={`input-description`} className='label textarea'>
              <span className='span'>{'설명'}</span>
              <textarea
                className='input'
                id={`input-description`}
                value={contactForm.description}
                onChange={(e) => onValueChanged('description', e.target.value)}
              />
            </label>
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
        <div className='download-container'>
          <span className='label'>{'포트폴리오 다운로드'}</span>
          <a href={images.pdf} target='_blank' className='button'>
            <img src={images.downloadBig} alt='download-btn' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
