import { getClassNamesPaginationItems } from '../../utils';
import { Icon } from '@src/stories/graphics/icon';
import { PaginationArrowProps } from './types';
import { usePaginationContext } from '../../context';

export const PaginationArrow = ({ id, label }: PaginationArrowProps) => {
  const { onClick, ...props } = usePaginationContext();
  const classes = getClassNamesPaginationItems(props);

  return (
    <button
      {...props}
      className={classes.paginationArrow}
      onClick={() => onClick(id!)}
    >
      {typeof label === 'string' ? label : <Icon icon={label!} />}
    </button>
  );
};
