import React from 'react';
import { Course } from '../services/fakeCourseService';

export interface CoursesTableProps {
  courses: Course[];
  onSort: any;
  sortColumn: { field: string; order: string };
}

export interface CoursesTableState {}

class CoursesTable extends React.Component<CoursesTableProps, CoursesTableState> {
  raiseSort = (field: string) => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.field === field) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.field = field;
      sortColumn.order = 'asc';
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { courses } = this.props;

    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th onClick={() => this.raiseSort('title')} scope='col'>
              Title
            </th>
            <th onClick={() => this.raiseSort('level')} scope='col'>
              Level
            </th>
            <th onClick={() => this.raiseSort('duration')} scope='col'>
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          {courses.map(
            (course: Course) =>
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
    );
  }
}

export default CoursesTable;
