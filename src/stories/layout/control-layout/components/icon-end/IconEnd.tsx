import { Icon } from '@src/stories/graphics/icon';
import { iconControlLayoutClassNames } from '../../utils';
import { IconEndProps } from './types';
import { useControlLayout } from '../../store';

export const IconEnd = ({ className, icon, ...props }: IconEndProps) => {
  const ctx = useControlLayout();
  const classNames = iconControlLayoutClassNames({ ...ctx, type: 'endIcon', className });

  if (ctx.isPending || (ctx.isError !== undefined && ctx.isStatus)) return null;

  return (
    <button {...props} className={classNames}>
      <Icon icon={icon} size="1x" />
    </button>
  );
};
