import { ContainerProps } from './types';
import { getClassesContainer } from './utils';

export const Container = ({
  children,
  padding = 'padding-sm',
}: ContainerProps) => {
  const classes = getClassesContainer(padding);

  return <div className={classes}>{children}</div>;
};
