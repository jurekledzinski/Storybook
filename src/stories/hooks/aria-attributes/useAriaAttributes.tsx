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

  const selectTriggerA11y = (open: boolean) => {
    return {
      role: 'combobox',
      'aria-haspopup': 'listbox',
      'aria-expanded': open,
      'aria-controls': 'select-list',
    };
  };

  const selectPanelA11y = () => {
    return {
      role: 'presentation',
      id: 'select-panel',
    };
  };

  const selectListA11y = () => {
    return {
      role: 'listbox',
      id: 'select-list',
    };
  };

  const selectOptionA11y = (id: string) => {
    return {
      role: 'option',
      id,
    };
  };

  return {
    menuA11y,
    menuItemA11y,
    menuPanelA11y,
    menuTriggerA11y,
    selectTriggerA11y,
    selectPanelA11y,
    selectListA11y,
    selectOptionA11y,
  };
};
