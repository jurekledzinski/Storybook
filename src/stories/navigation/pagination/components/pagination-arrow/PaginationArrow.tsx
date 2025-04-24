import { Icon } from '@src/stories/graphics/icon';
import { PaginationArrowProps } from './types';
import { getClassNamesPaginationItems } from '../../utils';

export const PaginationArrow = ({
  color,
  size,
  spacing,
  variant,
  label,
  onClick,
}: PaginationArrowProps) => {
  const classes = getClassNamesPaginationItems({
    color,
    size,
    spacing,
    variant,
  });

  return (
    <button className={classes.paginationArrow} onClick={onClick}>
      {typeof label === 'string' ? label : <Icon icon={label!} />}
    </button>
  );
};
