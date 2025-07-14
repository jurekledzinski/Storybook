import { getA11yIds } from './helpers';

export const useAriaAttributes = (id?: string) => {
  const getIds = () => {
    if (!id) throw new Error('ARIA attributes requiring ID need an "id"');
    return getA11yIds(id);
  };

  const menuA11y = () => ({
    role: 'menu',
  });

  const menuItemA11y = (disabled: boolean = false) => ({
    role: 'menuitem',
    'aria-disabled': disabled,
  });

  const menuPanelA11y = () => {
    const { triggerId, panelId } = getIds();

    return {
      'aria-labelledby': triggerId,
      id: panelId,
    };
  };

  const menuTriggerA11y = (open: boolean) => {
    const { triggerId, panelId } = getIds();

    return {
      'aria-haspopup': 'menu' as const,
      'aria-expanded': open,
      'aria-controls': panelId,
      id: triggerId,
    };
  };

  return {
    menuA11y,
    menuItemA11y,
    menuPanelA11y,
    menuTriggerA11y,
  };
};
