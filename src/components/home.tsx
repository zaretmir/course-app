import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.SFC<{}> = () => {
  return (
    <div className='container' style={{ textAlign: 'center' }}>
      <h1 className='display-4'>Welcome!</h1>
      <p className='lead'>You can start navigating to</p>
      <Link className='btn btn-outline-primary' to='/courses'>
        See all active courses
      </Link>
      <p className='lead'>- or -</p>
      <Link className='btn btn-primary' to='/courses/add'>
        Add a new course
      </Link>
    </div>
  );
};

export default Home;
