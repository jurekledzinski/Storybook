import { ContainerProps } from './types';
import { getClassesContainer } from './utils/classNames';

export const Container = ({
  as = 'div',
  children,
  margin,
  padding,
  maxWidth,
}: ContainerProps) => {
  const Tag = `${as}` as keyof JSX.IntrinsicElements;
  const classes = getClassesContainer({ margin, maxWidth, padding });

  return (
    <Tag
      className={classes}
      style={{
        ...(typeof maxWidth === 'number' ? { maxWidth } : {}),
        ...(typeof padding === 'number' ? { padding } : {}),
        ...(typeof margin === 'number' ? { margin } : {}),
      }}
    >
      {children}
    </Tag>
  );
};
