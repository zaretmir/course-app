import React from 'react';

export interface InputBooleanProps {
  label: string;
  name: string;
  value?: string | number;
  onChange: any;
}

const InputBoolean: React.SFC<InputBooleanProps> = ({ label, value, name, onChange }) => {
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
};

export default InputBoolean;
