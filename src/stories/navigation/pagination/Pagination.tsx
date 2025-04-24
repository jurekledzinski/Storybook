import { PaginationArrow, PaginationItem } from './components';
import { PaginationProps } from './types';
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { usePagination } from './hooks';
import { getClassNamesPagination } from './utils';

// Format props z helper function by lepiej to wyglądało
// Dodać props do warunkowego wyświetlenia elementów

export const Pagination = ({
  maxRange = 10,
  perPage = [10],
  totalPages,
  onChangePage,
  ...props
}: PaginationProps) => {
  const { currentPage, onClick, paginationItems } = usePagination({
    onChangePage,
    totalPages,
    maxRange,
    perPage,
  });

  const classes = getClassNamesPagination({ spacing: props.spacing });

  //   const start = currentPage * itemsPerPage + 1;
  //   const end = Math.min((currentPage + 1) * itemsPerPage, totalPages);
  //   console.log('start mobile', start, '-', end, 'of', totalPages);

  return (
    <div className={classes}>
      <PaginationArrow
        label={faAnglesLeft}
        onClick={() => onClick('first')}
        {...props}
      />
      <PaginationArrow
        label={'Prev'}
        onClick={() => onClick('prev')}
        {...props}
      />

      {paginationItems.map((item) => {
        return (
          <PaginationItem
            key={item}
            isActive={item === currentPage}
            page={item + 1}
            onClick={() => onClick('page', item)}
            {...props}
          />
        );
      })}

      <PaginationArrow
        label="Next"
        onClick={() => onClick('next')}
        {...props}
      />
      <PaginationArrow
        label={faAnglesRight}
        onClick={() => onClick('last')}
        {...props}
      />
    </div>
  );
};
