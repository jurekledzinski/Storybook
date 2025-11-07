import { Size } from '@src/stories/types';

export interface MenuProps extends React.MenuHTMLAttributes<HTMLUListElement> {
  size?: Size;
}
