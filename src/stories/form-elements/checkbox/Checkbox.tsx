import { CheckboxInput } from './components';
import { CheckboxProps } from './types';
import { getClassCheckbox } from './utils';

export const Checkbox = ({ children, ...props }: CheckboxProps) => {
  const { color, disabled, readOnly, size, variant } = props;
  const classes = getClassCheckbox(color, disabled, readOnly, size, variant);

  return (
    <label className={classes.label} htmlFor={props.id}>
      <CheckboxInput {...props} />
      {children}
    </label>
  );
};
