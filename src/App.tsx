import React from 'react';
import './App.css';
import CourseList from './components/courseList';

const App: React.FC = () => {
  return (
    <main className='container'>
      <CourseList />
    </main>
  );
};

export default App;
