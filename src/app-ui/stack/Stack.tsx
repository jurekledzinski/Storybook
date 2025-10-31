import { stackClassNames } from './utils';
import { StackProps } from './types';

export const Stack = ({ children, ...props }: StackProps) => {
  const classNames = stackClassNames(props);

  return (
    <div className={classNames} style={props.style}>
      {children}
    </div>
  );
};
