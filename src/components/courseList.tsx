import React from 'react';
import Pagination from './common/pagination';
import axios from 'axios';
import { Course } from './../services/fakeCourseService';
import { paginate } from './../utils/paginate';
import { sortItems } from './../utils/sort';
import CoursesTable from './coursesTable';

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
    pageSize: 2,
    sortColumn: { field: 'title', order: 'asc' }
  };

  async componentDidMount() {
    const { data: courses } = await axios.get(
      'http://localhost:8080/course-catalog/course-management/courses'
    );
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

    if (coursesCount === 0) return <p>No courses found.</p>;

    const courses = this.getPagedData();

    return (
      <React.Fragment>
        <p>Found {coursesCount} courses in the database.</p>
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
