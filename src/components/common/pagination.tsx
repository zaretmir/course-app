import React from 'react';
import _ from 'lodash';

export interface PaginationProps {
  itemsCount: number;
  currentPage: number;
  pageSize: number;
  onPageChange: any;
}

const Pagination: React.SFC<PaginationProps> = props => {
  const { itemsCount, currentPage, pageSize, onPageChange } = props;

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        <li className='page-item'>
          <button
            className='page-link'
            aria-label='Previous'
            onClick={() => onPageChange(pages[0])}
          >
            <span aria-hidden='true'>&laquo;</span>
          </button>
        </li>

        {pages.map(page => (
          <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
            <button className='page-link' onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}

        <li className='page-item'>
          <button
            className='page-link btn-info'
            aria-label='Next'
            onClick={() => onPageChange(pages[pages.length - 1])}
          >
            <span aria-hidden='true'>&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
