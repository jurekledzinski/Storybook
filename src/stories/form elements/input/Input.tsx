import styles from './Input.module.css';
import { classNames } from '../../helpers/classNames';
import { InputProps, TextareaProps } from './types';

// Dodać loader gdy isPending ? <Loader/> : <Icon>
// Dla password icon eye
// Search icon

// Dodaj media queris dla desktop > 575px to co już sa style beda dla mobile
// Może jeszcze lekkie korekty odległości dla mobile

export const Input = ({
  as = 'input',
  label,
  variant = 'basic',
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
          placeholder=""
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
          className={inputClassNames}
          {...props}
          placeholder=""
        />

        {variant !== 'basic' && (
          <legend className={legendClassNames}>{label}</legend>
        )}
      </fieldset>
    );
  }
};
