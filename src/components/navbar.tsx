import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.SFC<{}> = () => {
  return (
    <nav className='navbar navbar-light bg-dark'>
      <a className='navbar-brand' href='#' style={{ color: 'white' }}>
      <FontAwesomeIcon icon={faGraduationCap} style={{ color: 'white' }} />
        Bootstrap
      </a>
    </nav>
  );
};

export default Navbar;
