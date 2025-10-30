import { CheckboxInput } from './components';
import { checkboxLabelClassNames } from './utils';
import { CheckboxProps } from './types';
import { forwardRef } from 'react';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, classNameLabel, disabled, readOnly, size, ...props }, ref) => {
    const classNames = checkboxLabelClassNames({
      classNameLabel,
      disabled,
      readOnly,
      size,
    });

    return (
      <label className={classNames} htmlFor={props.id}>
        <CheckboxInput {...{ ...props, disabled, readOnly, size }} ref={ref} />
        {children}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
