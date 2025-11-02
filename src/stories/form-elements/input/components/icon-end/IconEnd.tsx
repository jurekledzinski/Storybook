import { Icon } from '@src/stories/graphics/icon';
import { IconEndProps } from './types';
import { iconInputWrapperClassNames } from '../../utils';
import { useInputWrapper } from '../../store/useInputWrapper';

export const IconEnd = ({ className, icon, ...props }: IconEndProps) => {
  const ctx = useInputWrapper();
  const classNames = iconInputWrapperClassNames({ ...ctx, type: 'endIcon', className });

  if (ctx.isPending || ctx.isError !== undefined) return null;

  return (
    <button {...props} className={classNames}>
      <Icon icon={icon} size="1x" />
    </button>
  );
};
