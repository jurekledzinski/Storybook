import { radioGroupClassNames } from './utils';
import { RadioGroupProps } from './types';

export const RadioGroup = ({ children, ...props }: RadioGroupProps) => {
  const classNames = radioGroupClassNames(props);

  return <div className={classNames}>{children}</div>;
};

RadioGroup.displayName = 'RadioGroup';
