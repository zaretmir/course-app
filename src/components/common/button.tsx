import React from 'react';
export interface ButtonProps {}

const Button: React.SFC<ButtonProps> = () => {
  return <button className='btn btn-primary'>Add course</button>;
};

export default Button;
