import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

export interface TableHeaderProps {
  columns: { label?: string; key?: string; field?: string }[];
  sortColumn: { field: string; order: string };
  onSort: Function;
}

class TableHeader extends React.Component<TableHeaderProps, {}> {
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

  renderSortIcon = (column: any) => {
    if (column.field !== this.props.sortColumn.field) return null;
    if (this.props.sortColumn.order === 'asc') return <FontAwesomeIcon icon={faSortUp} />;
    return <FontAwesomeIcon icon={faSortDown} />;
  };

  render() {
    const { columns } = this.props;
    return (
      <thead className='bg-light'>
        <tr>
          {columns.map(column => (
            <th
              className='clickable'
              key={column.field || column.key}
              onClick={() => column.field && this.raiseSort(column.field)}
              scope='col'
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
