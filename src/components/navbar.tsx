import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.SFC<{}> = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand' to='#'>
        <FontAwesomeIcon icon={faGraduationCap} style={{ color: 'white' }} /> CourseApp
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <Link className='nav-item nav-link' to='/'>
            Home <span className='sr-only'>(current)</span>
          </Link>
          <Link className='nav-item nav-link' to='/courses'>
            Course Catalog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
