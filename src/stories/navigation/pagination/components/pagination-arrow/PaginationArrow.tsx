import {
  getClassNamesPaginationItems,
  getPaginationArrowProps,
} from '../../utils';
import { Icon } from '@src/stories/graphics/icon';
import { PaginationArrowProps } from './types';
import { usePaginationContext } from '../../context';

export const PaginationArrow = ({
  id,
  label,
  ...props
}: PaginationArrowProps) => {
  const { onClick, ...rest } = usePaginationContext();
  const uiPaginationProps = getPaginationArrowProps(rest);

  const classes = getClassNamesPaginationItems(uiPaginationProps);

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
