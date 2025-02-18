import styles from './Input.module.css';
import { classNames } from '../../helpers/classNames';
import { InputProps, TextareaProps } from './types';

// Dodaj disabled lub readonly prop albo both

export const Input = ({
  as = 'input',
  label,
  variant = 'basic',
  placeholder = '',
  ...props
}: InputProps | TextareaProps) => {
  const inputClassNames = classNames(
    styles.input,
    styles[variant as keyof typeof styles]
  );

  const textareaClassNames = classNames(
    styles.textarea,
    styles[variant as keyof typeof styles]
  );

  const legendClassNames = classNames(
    styles.legend,
    styles[variant as keyof typeof styles]
  );

  const fieldsetClassNames = classNames(
    styles.fieldset,
    styles[variant as keyof typeof styles]
  );

  if (as === 'textarea' && 'rows' in props && 'cols' in props) {
    return (
      <fieldset className={fieldsetClassNames}>
        <textarea
          aria-label={label}
          className={textareaClassNames}
          {...props}
          placeholder={placeholder}
          required
        />

        {variant !== 'basic' && (
          <legend className={legendClassNames}>{label}</legend>
        )}
      </fieldset>
    );
  }

  if ((as === 'input' && 'type' in props) || 'className' in props) {
    const { size, ...rest } = props;

    return (
      <fieldset
        className={classNames(
          fieldsetClassNames,
          size! ? styles[size! as keyof typeof styles] : ''
        )}
      >
        <input
          aria-label={label}
          {...rest}
          className={classNames(
            inputClassNames,
            props.className!
              ? props.className
                  .map((i) => styles[i as keyof typeof styles])
                  .join(' ')
              : ''
          )}
          placeholder={placeholder}
          required
        />

        {variant !== 'basic' && (
          <legend
            className={classNames(
              legendClassNames,
              props.className!
                ? props.className
                    .map((i) => styles[i as keyof typeof styles])
                    .join(' ')
                : ''
            )}
          >
            {label}
          </legend>
        )}
      </fieldset>
    );
  }
};
