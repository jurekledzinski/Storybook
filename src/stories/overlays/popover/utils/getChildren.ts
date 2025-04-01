import { Option } from '../types';

export const getChildren = <T extends Option = Option>(
  children: React.ReactNode | ((item: T) => React.ReactNode),
  items: T[]
) => {
  return typeof children === 'function'
    ? items.map((item) => children(item))
    : children;
};
