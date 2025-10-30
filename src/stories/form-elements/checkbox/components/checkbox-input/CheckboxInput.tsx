import { checkboxClassNames } from '../../utils';
import { CheckboxProps } from '../../types';
import { forwardRef, Ref } from 'react';
import { Icon } from '../icon';

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { className, color, disabled, readOnly, size, variant, ...props },
    ref: Ref<HTMLInputElement>
  ) => {
    const classNames = checkboxClassNames({
      className,
      color,
      disabled,
      readOnly,
      size,
      variant,
    });

    return (
      <>
        <input
          ref={ref}
          className={classNames}
          disabled={disabled}
          id={props.id}
          readOnly={readOnly}
          type="checkbox"
          {...props}
          onKeyDown={(e) => readOnly && e.preventDefault()}
        />
        <Icon className={classNames} />
      </>
    );
  }
);

CheckboxInput.displayName = 'CheckboxInput';
