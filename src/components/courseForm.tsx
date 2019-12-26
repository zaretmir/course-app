import React from 'react';
import * as courseService from '../services/courseService';
import * as instructorService from '../services/instructorService';
import Input from './common/input';
import InputSelect from './common/inputSelect';
import { Course } from '../domain/course';
import { Instructor } from '../domain/instructor';

export interface CourseFormProps {
  history: any;
}

export interface CourseFormState {
  course: Course;
  instructors: Instructor[];
}

class CourseForm extends React.Component<CourseFormProps, CourseFormState> {
  state = {
    course: {
      id: null,
      title: 'Enter course name...',
      duration: 0,
      level: '',
      instructorId: 0,
      isActive: true
    },
    instructors: []
  };

  async componentDidMount() {
    const { data: instructors } = await instructorService.getInstructors();
    this.setState({ instructors });
  }

  parseValue = (input: any) => {
    console.log('Input type ', input.type);
    console.log('Input value ', input.value);
    if (input.type === 'number') return +input.value;
    if (input.name === 'isActive') return input.checked;
    if (input.name === 'instructor') {
      return this.state.instructors.find((i: Instructor) => i.name === input.value);
    }
    return input.value;
  };

  handleChange = ({ currentTarget: input }: any) => {
    const course: Course = this.state.course;
    course[input.name] = this.parseValue(input);
    console.log('Course: ', course);
    this.setState({ course });
  };

  handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await courseService.postCourse(this.state.course);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        alert('Validation error: one or more fields are not valid');
        return;
      }
    }

    this.props.history.push('/courses');
  };

  render() {
    const { instructors, course } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} style={{ border: 'border:1px solid black' }}>
          <Input label='Active' name='isActive' onChange={this.handleChange} type='checkbox' />
          <InputSelect
            label='Instructor'
            name='instructor'
            options={instructors.map(({ name }) => name)}
            onChange={this.handleChange}
          />
          <Input
            label='Course title'
            name='title'
            value={course.title}
            onChange={this.handleChange}
            type='text'
          />
          <InputSelect
            label='Course level'
            name='level'
            options={['basic', 'intermediate', 'advanced']}
            onChange={this.handleChange}
          />
          <Input
            label='Course duration (hours)'
            name='duration'
            value={course.duration}
            onChange={this.handleChange}
            type='number'
          />
          <div className='custom-file'>
            <label className='custom-file-label' htmlFor='customFileLang'>
              Upload syllabus...
            </label>
            <input type='file' className='custom-file-input' id='customFileLang' />
          </div>
          <button className='btn btn-primary mt-2' onClick={this.handleSubmit}>
            Add
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default CourseForm;
