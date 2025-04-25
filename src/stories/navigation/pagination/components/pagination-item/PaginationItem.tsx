import { getClassNamesPaginationItems } from '../../utils';
import { PaginationItemProps } from './types';

export const PaginationItem = ({
  page,
  onClick,
  ...props
}: PaginationItemProps) => {
  const classes = getClassNamesPaginationItems({ ...props });

  return (
    <button {...props} className={classes.paginationItem} onClick={onClick}>
      {page}
    </button>
  );
};
