import React from 'react';
import Pagination from './common/pagination';
import * as courseService from '../services/courseService';
import { Course } from '../domain/course';
import { paginate } from './../utils/paginate';
import { sortItems } from './../utils/sort';
import CoursesTable from './coursesTable';
import InfoBox from './common/infoBox';

export interface CourseListProps {}

export interface CourseListState {
  allCourses: Course[];
  currentPage: number;
  pageSize: number;
  sortColumn: { field: string; order: string };
}

class CourseList extends React.Component<CourseListProps, CourseListState> {
  state = {
    allCourses: [],
    currentPage: 1,
    pageSize: 5,
    sortColumn: { field: 'title', order: 'asc' }
  };

  async componentDidMount() {
    const { data: courses } = await courseService.getCourses();
    console.log(courses);
    this.setState({ allCourses: courses });
  }

  handlePageChange = (page: number) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn: any) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const { allCourses, currentPage, pageSize, sortColumn } = this.state;

    const sorted = sortItems(allCourses, sortColumn.field, sortColumn.order);

    const courses = paginate(sorted, pageSize, currentPage);

    return courses;
  };

  render() {
    const { allCourses, currentPage, pageSize, sortColumn } = this.state;
    const { length: coursesCount } = allCourses;

    if (coursesCount === 0) return <InfoBox message='No courses found.' />;

    const courses = this.getPagedData();

    return (
      <React.Fragment>
        <InfoBox message={'Found ' + courses.length + ' courses in the database'} />
        <CoursesTable courses={courses} sortColumn={sortColumn} onSort={this.handleSort} />
        <Pagination
          itemsCount={coursesCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
        <button className='btn btn-primary'>Add course</button>
      </React.Fragment>
    );
  }
}

export default CourseList;
