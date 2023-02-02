import React from 'react';
import '../styles/cinput.styles.scss';

type Props = {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  onValueChanged: (value: string) => void;
};

const CInput = ({ id, label, value, placeholder, onValueChanged }: Props) => {
  return (
    <div className='cinput-root'>
      <div className='label'>{label}</div>
      <label htmlFor={`input-${id}`} className='box'>
        {/* <span className='span'>{label}</span> */}
        <input
          className='input'
          placeholder={`${placeholder}`}
          type='text'
          id={`input-${id}`}
          value={value}
          onChange={(e) => onValueChanged(e.target.value)}
        />
      </label>
    </div>
  );
};

export default CInput;
