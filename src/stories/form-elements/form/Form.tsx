import { formClassNames } from './utils';
import { FormProps } from './types';

export const Form = ({
  className,
  children,
  orientation,
  ...props
}: FormProps) => {
  const classNames = formClassNames({ className, orientation });

  return (
    <form className={classNames} {...props}>
      {children}
    </form>
  );
};
