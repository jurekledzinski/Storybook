import { forwardRef, Ref } from 'react';
import { radioClassNames } from '../../utils';
import { RadioProps } from './types';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    { children, color, disabled, readOnly, size, variant, ...props },
    ref: Ref<HTMLInputElement>
  ) => {
    const classNames = radioClassNames({
      color,
      disabled,
      readOnly,
      size,
      variant,
    });

    return (
      <label className={classNames.label} htmlFor={props.id}>
        <input
          ref={ref}
          className={classNames.input}
          disabled={disabled}
          id={props.id}
          readOnly={readOnly}
          type="radio"
          {...props}
          onKeyDown={(e) => readOnly && e.preventDefault()}
        />
        <span className={classNames.radio}></span>
        {children}
      </label>
    );
  }
);

Radio.displayName = 'Radio';
