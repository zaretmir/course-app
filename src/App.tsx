import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CourseList from './components/courseList';
import CourseForm from './components/courseForm';

const App: React.FC = () => {
  return (
    <main className='container'>
      <Route path='/courses' component={CourseList} />
      <Route path='/coursesForm' component={CourseForm} />
    </main>
  );
};

export default App;
