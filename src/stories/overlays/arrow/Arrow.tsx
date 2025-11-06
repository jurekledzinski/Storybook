import { arrowClassNames } from './utils';
import { ArrowProps } from './types';

export const Arrow = ({ gap = 1, ...props }: ArrowProps) => {
  const classNames = arrowClassNames(props);

  return <span className={classNames} style={{ '--arrow-gap': gap } as React.CSSProperties}></span>;
};
