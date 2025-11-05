import { DrawerCSSVariables } from './types';

export const drawerCSSVariables: DrawerCSSVariables = ({
  gap = 8,
  width = 250,
  top = 0,
  zIndex = 40,
}) =>
  ({
    ...(gap ? { '--drawer-gap': `${gap}px` } : {}),
    ...(width ? { '--drawer-width': `${width}px` } : {}),
    ...(top ? { '--drawer-top': `${top}px` } : {}),
    ...(zIndex ? { '--z-drawer': zIndex } : {}),
  } as React.CSSProperties);
