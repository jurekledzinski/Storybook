import { Icon } from '@src/stories/graphics/icon';
import { iconInputWrapperClassNames } from '../../utils';
import { IconStartProps } from './types';
import { useInputWrapper } from '../../store/useInputWrapper';

export const IconStart = ({ className, icon, ...props }: IconStartProps) => {
  const ctx = useInputWrapper();
  const classNames = iconInputWrapperClassNames({ ...ctx, type: 'startIcon', className });

  return (
    <button {...props} className={classNames}>
      <Icon icon={icon} size="1x" />
    </button>
  );
};
