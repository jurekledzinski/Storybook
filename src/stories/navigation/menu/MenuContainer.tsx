import MenuProvider from './store/MenuProvider';
import PopOverProvider from '../../overlays/pop-over/store';
import { MenuContainerProps } from './types';

export const MenuContainer = ({
  children,
  onSelectItem,
  ...props
}: MenuContainerProps) => {
  return (
    <PopOverProvider>
      <MenuProvider onSelectItem={onSelectItem}>
        <div data-container="menu-container" {...props}>
          {children}
        </div>
      </MenuProvider>
    </PopOverProvider>
  );
};
