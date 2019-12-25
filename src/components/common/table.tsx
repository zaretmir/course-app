import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

export interface TableProps {
    data: any[];
    columns: any[];
    sortColumn: any;
    onSort: any;
}

const Table: React.SFC<TableProps> = ({data, columns, sortColumn, onSort}) => {
  return (
    <table className='table table-hover'>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
