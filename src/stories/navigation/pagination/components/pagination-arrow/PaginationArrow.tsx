import { getPaginationProps, paginationCommonClassNames } from '../../utils';
import { Icon } from '@src/stories/graphics/icon';
import { PaginationArrowProps } from './types';
import { usePaginationContext } from '../../store';

export const PaginationArrow = ({ id, label, onClick, ...props }: PaginationArrowProps) => {
  const { onClick: onChange, ...rest } = usePaginationContext();
  const { uiPaginationProps } = getPaginationProps(rest);

  const classNames = paginationCommonClassNames({ type: 'button', ...uiPaginationProps });

  return (
    <button
      {...props}
      className={classNames}
      onClick={(e) => {
        onChange(id!);
        if (onClick) return onClick(e);
      }}
    >
      {typeof label === 'string' ? label : <Icon icon={label!} />}
    </button>
  );
};
