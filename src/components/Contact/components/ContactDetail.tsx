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
};
const ContactDetail = ({
  contactForm,
  onValueChanged,
  onSubmitClicked,
}: Props) => {
  return (
    <div className='contact-detail-root'>
      <div className='title-container'>
        <h1 className='title'>{'Contact Us'}</h1>
        <img alt='obj' className='obj' />
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
      </div>
    </div>
  );
};

export default ContactDetail;
