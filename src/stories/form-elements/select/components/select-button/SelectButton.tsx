import { forwardRef } from 'react';
import { InputBase } from '@src/stories/form-elements/input';
import { SelectButtonProps } from './types';
import { selectTriggerClassNames } from '../../utils';

export const SelectButton = forwardRef<HTMLButtonElement, SelectButtonProps>(
  ({ children, disabled, isError, label, size, variant, ...props }, ref) => {
    const classNames = selectTriggerClassNames({ ...props, disabled });

    return (
      <InputBase disabled={disabled} isError={isError} label={label} size={size} variant={variant}>
        <button disabled={disabled} ref={ref} className={classNames} {...props}>
          {children}
        </button>
      </InputBase>
    );
  }
);
SelectButton.displayName = 'SelectButton';
