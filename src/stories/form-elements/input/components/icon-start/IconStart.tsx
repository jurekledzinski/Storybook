import { Icon } from '@src/stories/graphics/icon';
import { iconInputWrapperClassNames } from '../..';
import { IconStartProps } from './types';
import { useInputWrapper } from '../../store/useInputWrapper';

export const IconStart = ({ icon, ...props }: IconStartProps) => {
  const ctx = useInputWrapper();
  const classNames = iconInputWrapperClassNames({ type: 'startIcon', ...ctx });

  return (
    <button {...props} className={classNames}>
      <Icon icon={icon} size="1x" />
    </button>
  );
};
