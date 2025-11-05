import { drawerCSSVariables, drawerClassNames } from './utils';
import { DrawerProps } from './types';

export const Drawer = ({ children, gap, top, width, zIndex, ...props }: DrawerProps) => {
  const classNames = drawerClassNames(props);
  const inline = drawerCSSVariables({ gap, top, width, zIndex });

  return (
    <div className={classNames.drawer} style={inline}>
      <div className={classNames.inner}>{children}</div>
    </div>
  );
};
