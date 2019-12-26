import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CourseList from './components/courseList';
import CourseForm from './components/courseForm';
import Navbar from './components/navbar';
import Home from './components/home';

const App: React.SFC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className='container mt-2' style={{ width: '65%' }}>
        <Switch>
          <Route path='/courses/add' component={CourseForm} />
          <Route path='/courses' component={CourseList} />
          <Route path='/' component={Home} />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
