import { forwardRef, useImperativeHandle, useRef } from 'react';
import { inputClassNames } from './utils';
import { MergeInputsProps, UnionInputs } from './types';

export const Input = forwardRef<UnionInputs, MergeInputsProps>(
  (
    {
      as = 'input',
      disabled,
      isError,
      size,
      variant,
      placeholder = '',
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const txtRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => inputRef.current || txtRef.current!, []);

    const classNames = inputClassNames({ variant, size, isError, disabled });

    if (as === 'textarea' && 'cols' in props) {
      return (
        <fieldset className={classNames.fieldset}>
          <textarea
            {...props}
            ref={txtRef}
            aria-label={props.label}
            className={classNames.textarea}
            disabled={disabled}
            placeholder={placeholder}
            required
          />

          {variant !== 'basic' && (
            <legend className={classNames.legend}>{props.label}</legend>
          )}
        </fieldset>
      );
    }

    if (as === 'input' && 'type' in props) {
      return (
        <fieldset className={classNames.fieldset}>
          <input
            {...props}
            ref={inputRef}
            aria-label={props.label}
            className={classNames.input}
            disabled={disabled}
            placeholder={placeholder}
            required
          />

          {variant !== 'basic' && (
            <legend className={classNames.legend}>{props.label}</legend>
          )}
        </fieldset>
      );
    }

    return null;
  }
);

Input.displayName = 'Input';
