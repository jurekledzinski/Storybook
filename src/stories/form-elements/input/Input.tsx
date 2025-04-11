import { forwardRef, Ref } from 'react';
import { getClassNamesInput } from './utils';
import { MergeProps } from './types';

export const Input = forwardRef<
  HTMLTextAreaElement | HTMLInputElement,
  MergeProps
>(
  (
    {
      as = 'input',
      disabled,
      isError,
      size,
      variant = 'basic',
      placeholder = '',
      ...props
    },
    ref: Ref<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const classes = getClassNamesInput({ variant, size, isError, disabled });

    if (as === 'textarea' && 'rows' in props && 'cols' in props) {
      return (
        <fieldset className={classes.fieldset}>
          <textarea
            ref={ref as Ref<HTMLTextAreaElement>}
            {...props}
            aria-label={props.label}
            className={classes.textarea}
            disabled={disabled}
            placeholder={placeholder}
            required
          />

          {variant !== 'basic' && (
            <legend className={classes.legend}>{props.label}</legend>
          )}
        </fieldset>
      );
    }

    if (as === 'input' && 'type' in props) {
      return (
        <fieldset className={classes.fieldset}>
          <input
            ref={ref as Ref<HTMLInputElement>}
            {...props}
            aria-label={props.label}
            className={classes.input}
            disabled={disabled}
            placeholder={placeholder}
            required
          />

          {variant !== 'basic' && (
            <legend className={classes.legend}>{props.label}</legend>
          )}
        </fieldset>
      );
    }
  }
);
