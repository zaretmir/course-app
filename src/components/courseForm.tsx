import React from 'react';
import axios from 'axios';
import { Course } from './../services/fakeCourseService';
import Input from './common/input';
import InputSelect from './common/inputSelect';
import { Instructor } from './../services/instructor';

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
      title: 'test',
      duration: 0,
      level: '',
      instructorId: 0,
      isActive: true
    },
    instructors: []
  };

  async componentDidMount() {
    const { data: instructors } = await axios.get(
      'http://localhost:8080/course-catalog/instructor-management/instructors'
    );
    console.log('instructors: ', instructors);
    this.setState({ instructors });
  }

  handleChange = ({ currentTarget: input }: any) => {
    const course: Course = { ...this.state.course };

    input.type === 'number'
      ? (course[input.name] = parseInt(input.value))
      : (course[input.name] = input.value);

    if (input.type === 'checkbox') {
      input.checked === true ? (course[input.name] = true) : (course[input.name] = false);
    }

    if (input.name === 'instructor') {
      course[input.name] = this.state.instructors.find((i: Instructor) => i.name === input.value);
    }

    this.setState({ course });
  };

  handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(this.state.course);

    // Call server here
    // const { data: addedCourse } = await axios.post(
    //   'http://localhost:8080/course-catalog/course-management/courses',
    //   this.state.course
    // );
    try {
      await axios.post(
        'http://localhost:8080/course-catalog/course-management/courses',
        this.state.course
      );
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        alert('La liaste');
        console.log(ex.response.data.message);
        console.log(ex.response.data.subErrors);
      }
    }

    this.props.history.replace('/courses');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input label='Active' name='isActive' onChange={this.handleChange} type='checkbox' />
        <InputSelect
          label='Instructor'
          name='instructor'
          options={this.state.instructors.map(({ name }) => name)}
          onChange={this.handleChange}
        />
        <Input
          label='Course title'
          name='title'
          value={this.state.course.title}
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
          value={this.state.course.duration}
          onChange={this.handleChange}
          type='number'
        />
        {/* <Input
          label='Upload syllabus'
          name='syllabus'
          value='none'
          onChange='none'
          type='file'
        /> */}
        <div className='custom-file'>
          <label className='custom-file-label' htmlFor='customFileLang'>
            Upload syllabus...
          </label>
          <input type='file' className='custom-file-input' id='customFileLang' />
        </div>
        <button className='btn btn-primary' onClick={this.handleSubmit}>
          Add
        </button>
      </form>
    );
  }
}

export default CourseForm;
