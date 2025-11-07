import { Size } from '@src/stories/types';

type ParamsMenu = {
  className?: string;
  size?: Size;
};

type ParamsMenuItem = {
  className?: string;
  type?: 'link';
};

export type MenuClassNames = (params: ParamsMenu) => string;
export type MenuItemClassNames = (params: ParamsMenuItem) => string;
