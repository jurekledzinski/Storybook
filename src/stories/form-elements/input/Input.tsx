import { getClassNamesInput } from './utils';
import { InputProps, TextareaProps } from './types';

export const Input = ({
  as = 'input',
  disabled,
  isError,
  size,
  variant = 'basic',
  placeholder = '',
  ...props
}: InputProps | TextareaProps) => {
  const classes = getClassNamesInput({ variant, size, isError, disabled });

  if (as === 'textarea' && 'rows' in props && 'cols' in props) {
    return (
      <fieldset className={classes.fieldset}>
        <textarea
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
};
