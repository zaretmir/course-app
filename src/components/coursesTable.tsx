import React from 'react';
import Table from './common/sortableTable/table';
import { Course } from '../domain/course';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

export interface CoursesTableProps {
  courses: Course[];
  onSort: any;
  sortColumn: { field: string; order: string };
}

export interface CoursesTableState {}

class CoursesTable extends React.Component<CoursesTableProps, {}> {
  columns = [
    { field: 'id', label: 'ID' },
    { field: 'title', label: 'Title' },
    { field: 'level', label: 'Level' },
    { field: 'duration', label: 'Duration' },
    {
      key: 'button',
      content: () => (
        <button type='button' className='btn btn-outline-info'>
          Syllabus <FontAwesomeIcon icon={faFileDownload} />
        </button>
      )
    }
  ];

  render() {
    const { courses, onSort, sortColumn } = this.props;

    return <Table data={courses} columns={this.columns} onSort={onSort} sortColumn={sortColumn} />;
  }
}

export default CoursesTable;
