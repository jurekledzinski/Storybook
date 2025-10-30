import { checkboxGroupClassNames } from './utils';
import { CheckboxGroupProps } from './types';

export const CheckboxGroup = ({ children, ...props }: CheckboxGroupProps) => {
  const classNames = checkboxGroupClassNames(props);

  return <div className={classNames}>{children}</div>;
};
