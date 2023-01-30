import React from 'react';
import '../styles/cinput.styles.scss';

type Props = {
  id: string;
  label: string;
  value: string;
  onValueChanged: (value: string) => void;
};

const CInput = ({ id, label, value, onValueChanged }: Props) => {
  return (
    <div className='cinput-root'>
      <label htmlFor={`input-${id}`} className='label'>
        <span className='span'>{label}</span>
        <input
          className='input'
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
