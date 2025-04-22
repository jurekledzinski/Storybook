import { DrawerProps } from './types';
import { getClassNamesDrawer } from './utils';

export const Drawer = ({ children, ...props }: DrawerProps) => {
  const classes = getClassNamesDrawer(props);

  return <div className={classes}>{children}</div>;
};
