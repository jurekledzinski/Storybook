import { paginationCommonClassNames } from '../../../utils';
import { PaginationItemProps } from './types';

export const PaginationItem = ({ page, onClick, ...props }: PaginationItemProps) => {
  const classNames = paginationCommonClassNames({ className: 'button', ...props });

  return (
    <button {...props} key={page} className={classNames} onClick={() => onClick('page', page)}>
      {page + 1}
    </button>
  );
};
