import { getClassNamesHeading } from './utils';
import { HeadingProps } from './types';

export const Heading = ({
  className,
  fw,
  level = 1,
  children,
}: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const classNames = getClassNamesHeading(className, fw, level);

  return <Tag className={classNames}>{children}</Tag>;
};
