import { CheckboxProps } from '../../types';
import { forwardRef, Ref } from 'react';
import { getClassCheckbox } from '../../utils';
import { Icon } from '../icon';
import { classNames } from '@src/stories/helpers';

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { className, color, disabled, readOnly, size, variant, ...props },
    ref: Ref<HTMLInputElement>
  ) => {
    const classes = getClassCheckbox(color, disabled, readOnly, size, variant);

    return (
      <>
        <input
          ref={ref}
          className={classes.checkbox}
          disabled={disabled}
          id={props.id}
          readOnly={readOnly}
          type="checkbox"
          {...props}
          onKeyDown={(e) => readOnly && e.preventDefault()}
        />
        <Icon className={classNames(classes.checkbox, className)} />
      </>
    );
  }
);

CheckboxInput.displayName = 'CheckboxInput';
