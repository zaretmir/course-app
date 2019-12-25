import React from 'react';

export interface InfoBoxProps {
  message: string;
}

const InfoBox: React.SFC<InfoBoxProps> = ({ message }) => {
  return (
    <div className='alert alert-success' role='alert'>
      {message}
    </div>
  );
};

export default InfoBox;
