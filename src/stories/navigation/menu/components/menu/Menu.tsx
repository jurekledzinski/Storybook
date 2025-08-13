import { BaseMenu } from './BaseMenu';
import { MenuProps } from './types';
import { MouseEvent } from 'react';
import { useAriaAttributes } from '@src/stories/hooks';
import { useMenu } from '@src/stories/navigation/menu/store';
import { usePopOver } from '@src/stories/overlays/pop-over';

export const Menu = ({ children, ...props }: MenuProps) => {
  const { onSelectItem } = useMenu();
  const { onCloseAll } = usePopOver();
  const { menuA11y } = useAriaAttributes();

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const menuItemElement = (e.target as HTMLElement).closest('[data-id]');
    if (!menuItemElement) return;

    const id = menuItemElement.getAttribute('data-id');
    const type = menuItemElement.getAttribute('data-type');

    if (id && onSelectItem && type !== 'trigger' && type) {
      onSelectItem(id);
      onCloseAll();
    }
  };

  return (
    <BaseMenu {...props} onClick={onClick} {...menuA11y()}>
      {children}
    </BaseMenu>
  );
};
