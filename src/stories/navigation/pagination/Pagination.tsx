import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { getClassNamesPagination } from './utils';
import { PaginationArrow, PaginationInfo, PaginationItem } from './components';
import { PaginationProps } from './types';
import { usePagination } from './hooks';

// Format props z helper function by lepiej to wyglądało
// Dodać props do warunkowego wyświetlenia elementów
// Size buttons check

export const Pagination = ({
  maxRange = 10,
  perPage = [10],
  totalPages,
  onChangePage,
  ...props
}: PaginationProps) => {
  const { infoEnd, infoStart, currentPage, onClick, paginationItems } =
    usePagination({
      onChangePage,
      totalPages,
      maxRange,
      perPage,
    });

  const classes = getClassNamesPagination({ spacing: props.spacing });

  return (
    <div className={classes}>
      <PaginationArrow
        id="first"
        label={faAnglesLeft}
        onClick={() => onClick('first')}
        {...props}
        disabled
      />
      <PaginationArrow
        id="prev"
        label={'Prev'}
        onClick={() => onClick('prev')}
        {...props}
        disabled
      />

      {paginationItems.map((item, i) => {
        return (
          <PaginationItem
            key={item}
            isActive={item === currentPage}
            page={item + 1}
            onClick={() => onClick('page', item)}
            {...props}
            disabled={0 === i}
          />
        );
      })}

      <PaginationInfo
        itemEnd={infoEnd}
        itemStart={infoStart}
        totalItems={totalPages}
        {...props}
      />

      <PaginationArrow
        id="next"
        label="Next"
        onClick={() => onClick('next')}
        {...props}
        disabled
      />
      <PaginationArrow
        id="last"
        label={faAnglesRight}
        onClick={() => onClick('last')}
        {...props}
        disabled
      />
    </div>
  );
};
