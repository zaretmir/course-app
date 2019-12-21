import React from 'react';
import _ from 'lodash';

export interface PaginationProps {
  itemsCount: number;
  pageSize: number;
  onPageChange: any;
}

const Pagination: React.SFC<PaginationProps> = props => {
  const { itemsCount, pageSize } = props;

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        <li className='page-item'>
          <a className='page-link' href='#' aria-label='Previous'>
            <span aria-hidden='true'>&laquo;</span>
          </a>
        </li>

        {pages.map(page => (
          <li key={page} className='page-item'>
            <a className='page-link' onClick={() => props.onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}

        <li className='page-item'>
          <a className='page-link' href='#' aria-label='Next'>
            <span aria-hidden='true'>&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
