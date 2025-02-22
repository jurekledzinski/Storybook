import { getClassNamesInput } from './styles/styles';
import { InputProps, TextareaProps } from './types';

export const Input = ({
  as = 'input',
  className,
  label,
  size,
  variant = 'basic',
  placeholder = '',
  ...props
}: InputProps | TextareaProps) => {
  const classes = getClassNamesInput(variant, size, className);

  if (as === 'textarea' && 'rows' in props && 'cols' in props) {
    return (
      <fieldset className={classes.fieldset}>
        <textarea
          aria-label={label}
          {...props}
          className={classes.textarea}
          placeholder={placeholder}
          required
        />

        {variant !== 'basic' && (
          <legend className={classes.legend}>{label}</legend>
        )}
      </fieldset>
    );
  }

  if (as === 'input' && 'type' in props) {
    return (
      <fieldset className={classes.fieldset}>
        <input
          aria-label={label}
          {...props}
          className={classes.input}
          placeholder={placeholder}
          required
          minLength={3}
        />

        {variant !== 'basic' && (
          <legend className={classes.legend}>{label}</legend>
        )}
      </fieldset>
    );
  }
};
