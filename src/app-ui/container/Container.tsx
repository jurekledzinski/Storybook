import { ContainerProps } from './types';
import { getClassesContainer } from './utils';

export const Container = ({ children, padding = 'padding-sm', ...props }: ContainerProps) => {
  const classes = getClassesContainer(padding);

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};
