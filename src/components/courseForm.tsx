import React from 'react';

export interface CourseFormProps {}

export interface CourseFormState {
  course: {
    title: string;
    isActive: boolean;
  };
}

class CourseForm extends React.Component<CourseFormProps, CourseFormState> {
  state = {
    course: {
      title: 'Fake title',
      isActive: true
    }
  };

  handleSubmit = (e: any) => {
    e.preventDefault();

    // Call server here
    console.log('submitted');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group form-check'>
          <input
            value='1'
            name='isActive'
            type='checkbox'
            className='form-check-input'
            id='active'
          />
          <label className='form-check-label' htmlFor='active'>
            Active
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='instructor'>Example select</label>
          <select className='form-control' id='instructor'>
            <option>Pepito Perez</option>
            <option>Sandra Bullock</option>
            <option>Ose Díaz</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='title'>Course Title</label>
          <input
            value={this.state.course.title}
            type='text'
            className='form-control'
            id='title'
            placeholder='Spring MVC'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='level'>Course level</label>
          <select className='form-control' id='level'>
            <option>Basic</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='duration'>Course duration (hours)</label>
          <input type='number' className='form-control' id='duration' />
        </div>
        <button className='btn btn-primary'>Add</button>
      </form>
    );
  }
}

export default CourseForm;
