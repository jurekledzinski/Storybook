import { Icon } from '@src/stories/graphics/icon';
import { PaginationArrowProps } from './types';
import { getClassNamesPaginationItems } from '../../utils';

export const PaginationArrow = ({
  label,
  onClick,
  ...props
}: PaginationArrowProps) => {
  const classes = getClassNamesPaginationItems({ ...props });

  return (
    <button className={classes.paginationArrow} onClick={onClick}>
      {typeof label === 'string' ? label : <Icon icon={label!} />}
    </button>
  );
};
