import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CourseList from './components/courseList';
import CourseForm from './components/courseForm';
import Navbar from './components/navbar';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className='container mt-2'>
        <Route path='/courses' component={CourseList} />
        <Route path='/coursesForm' component={CourseForm} />
      </main>
    </React.Fragment>
  );
};

export default App;
