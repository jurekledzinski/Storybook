import { ContainerProps } from './types';
import { getClassesContainer } from './utils/classNames';
import {
  filterProps,
  spacingInlineStyles,
  spacingValues,
} from '@src/stories/helpers';

export const Container = ({
  as = 'div',
  children,
  ...props
}: ContainerProps) => {
  const Tag = `${as}` as keyof JSX.IntrinsicElements;
  const classes = getClassesContainer(props);
  const spacingProps = filterProps(props, spacingValues, true);
  const inline = spacingInlineStyles(spacingProps);

  return (
    <Tag className={classes} style={inline}>
      {children}
    </Tag>
  );
};
