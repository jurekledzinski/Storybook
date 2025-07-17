import { HeadingProps } from './types';
import { getClassNamesHeading } from './utils';

export const Heading = ({ level = 1, className, children }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const classNames = getClassNamesHeading(level, className);

  return <Tag className={classNames}>{children}</Tag>;
};
