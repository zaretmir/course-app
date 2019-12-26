import React from 'react';

export interface InputProps {
  label: string;
  name: string;
  value?: string | number;
  onChange: any;
  type: string;
}

const Input: React.SFC<InputProps> = ({ label, value, name, type, onChange }) => {
  if (type === 'checkbox') {
    return (
      <div className='form-group form-check'>
        <input
          name={name}
          value={name}
          onChange={onChange}
          type='checkbox'
          className='form-check-input'
          id={name}
        />
        <label className='form-check-label' htmlFor={name}>
          {label}
        </label>
      </div>
    );
  }
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        value={''+value}
        name={name}
        onChange={onChange}
        type={type}
        className='form-control'
        id={name}
      />
    </div>
  );
};

export default Input;
