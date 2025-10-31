import { Icon } from '@src/stories/graphics/icon';
import { PaginationArrowProps } from './types';
import { usePaginationContext } from '../../store';
import {
  getClassNamesPaginationItems,
  getPaginationArrowProps,
} from '../../utils';

export const PaginationArrow = ({
  id,
  label,
  onClick,
  ...props
}: PaginationArrowProps) => {
  const { onClick: onChange, ...rest } = usePaginationContext();
  const uiPaginationProps = getPaginationArrowProps(rest);

  const classes = getClassNamesPaginationItems(uiPaginationProps);

  return (
    <button
      {...props}
      className={classes.paginationArrow}
      onClick={(e) => {
        onChange(id!);
        if (onClick) return onClick(e);
      }}
    >
      {typeof label === 'string' ? label : <Icon icon={label!} />}
    </button>
  );
};
