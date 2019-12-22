import React from 'react';
import axios from 'axios';
import { Course } from './../services/fakeCourseService';

export interface CourseFormProps {
  history: any;
}

export interface CourseFormState {
  course: Course;
}

class CourseForm extends React.Component<CourseFormProps, CourseFormState> {
  state = {
    course: {
      title: '',
      duration: 0,
      level: '',
      isActive: true
    }
  };

  handleChange = ({ currentTarget: input }: any) => {
    const course: Course = { ...this.state.course };

    input.type === 'number'
      ? (course[input.name] = parseInt(input.value))
      : (course[input.name] = input.value);

    this.setState({ course });
  };

  handleSubmit = async (e: any) => {
    e.preventDefault();

    // Call server here
    const { data: addedCourse } = await axios.post(
      'http://my-json-server.typicode.com/zaretmir/mock-rest-server/courses',
      this.state.course
    );

    console.log(addedCourse);

    this.props.history.replace('/courses');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group form-check'>
          <input
            value='1'
            name='isActive'
            onChange={this.handleChange}
            type='checkbox'
            className='form-check-input'
            id='active'
          />
          <label className='form-check-label' htmlFor='active'>
            Active
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='instructor'>Instructor</label>
          <select
            value='YYYYYYYYYYYYYYYY'
            name='instructor'
            onChange={this.handleChange}
            className='form-control'
            id='instructor'
          >
            <option value='instructor 1'>Pepito Perez</option>
            <option value='instructor 2'>Sandra Bullock</option>
            <option value='instructor 3'>Ose Díaz</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='title'>Course Title</label>
          <input
            value={this.state.course.title}
            name='title'
            onChange={this.handleChange}
            type='text'
            className='form-control'
            id='title'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='level'>Course level</label>
          <select
            value='XXXXXXXXXXXXX'
            onChange={this.handleChange}
            className='form-control'
            id='level'
          >
            <option>Basic</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='duration'>Course duration (hours)</label>
          <input
            value={this.state.course.duration}
            name='duration'
            onChange={this.handleChange}
            type='number'
            className='form-control'
            id='duration'
          />
        </div>
        <button className='btn btn-primary' onClick={this.handleSubmit}>
          Add
        </button>
      </form>
    );
  }
}

export default CourseForm;
