import { ButtonIconProps } from './types';
import { forwardRef, Ref } from 'react';
import { Icon } from '@src/stories/graphics/icon';

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ className, icon, onClick }, ref: Ref<HTMLButtonElement>) => {
    return (
      <button ref={ref} className={className} tabIndex={0} onClick={onClick}>
        <Icon icon={icon} size="1x" />
      </button>
    );
  }
);
