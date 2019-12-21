import React from 'react';
import { getCourses } from '../services/fakeCourseService';
import Pagination from './pagination';

export interface CourseListProps {}

export interface CourseListState {
  courses: any[];
}

class CourseList extends React.Component<CourseListProps, CourseListState> {
  state = {
    courses: getCourses(),
    pageSize: 2
  };

  handlePageChange = (page: number) => {
    console.log(page);
  };

  render() {
    const { length: coursesCount } = this.state.courses;

    if (coursesCount === 0) return <p>No courses found.</p>;

    return (
      <React.Fragment>
        <p>Found {coursesCount} courses in the database.</p>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Title</th>
              <th scope='col'>Level</th>
              <th scope='col'>Duration</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map(
              course =>
                course.isActive && (
                  <tr>
                    <th scope='row'>{course.id}</th>
                    <td>{course.title}</td>
                    <td>{course.level}</td>
                    <td>{course.duration}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
        <Pagination
          itemsCount={coursesCount}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />

        <button className='btn btn-primary'>Add course</button>
      </React.Fragment>
    );
  }
}

export default CourseList;
