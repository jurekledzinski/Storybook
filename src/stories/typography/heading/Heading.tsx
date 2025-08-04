import { getClassNamesHeading } from './utils';
import { HeadingProps } from './types';

export const Heading = ({ children, level = 1, ...props }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const classNames = getClassNamesHeading({ level, ...props });

  return <Tag className={classNames}>{children}</Tag>;
};
