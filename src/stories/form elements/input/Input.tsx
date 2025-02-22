import styles from './Input.module.css';
import { classNames } from '../../helpers/classNames';
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
  const inputClassNames = classNames(
    styles.input,
    styles[variant as keyof typeof styles],
    size! ? styles[size! as keyof typeof styles] : '',
    className!
      ? className.map((i) => styles[i as keyof typeof styles]).join(' ')
      : ''
  );

  const textareaClassNames = classNames(
    styles.textarea,
    styles[variant as keyof typeof styles],
    size! ? styles[size! as keyof typeof styles] : '',
    className!
      ? className.map((i) => styles[i as keyof typeof styles]).join(' ')
      : ''
  );

  const legendClassNames = classNames(
    styles.legend,
    styles[variant as keyof typeof styles],
    className!
      ? className.map((i) => styles[i as keyof typeof styles]).join(' ')
      : '',
    size! ? styles[size! as keyof typeof styles] : ''
  );

  const fieldsetClassNames = classNames(
    styles.fieldset,
    styles[variant as keyof typeof styles],
    size! ? styles[size! as keyof typeof styles] : ''
  );

  if (as === 'textarea' && 'rows' in props && 'cols' in props) {
    return (
      <fieldset className={fieldsetClassNames}>
        <textarea
          aria-label={label}
          {...props}
          className={textareaClassNames}
          placeholder={placeholder}
          required
        />

        {variant !== 'basic' && (
          <legend className={legendClassNames}>{label}</legend>
        )}
      </fieldset>
    );
  }

  if (as === 'input' && 'type' in props) {
    return (
      <fieldset className={fieldsetClassNames}>
        <input
          aria-label={label}
          {...props}
          className={inputClassNames}
          placeholder={placeholder}
          required
        />

        {variant !== 'basic' && (
          <legend className={legendClassNames}>{label}</legend>
        )}
      </fieldset>
    );
  }
};
