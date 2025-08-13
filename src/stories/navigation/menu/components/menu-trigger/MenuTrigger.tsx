import { getClassNamesMenuTrigger } from './utils';
import { MenuTriggerProps } from './types';
import { useAriaAttributes } from '@src/stories/hooks';
import { usePopOver } from '@src/stories/overlays/pop-over/store';

export const MenuTrigger = ({
  children,
  id,
  fullWidth,
  ...props
}: MenuTriggerProps) => {
  const classNames = getClassNamesMenuTrigger(fullWidth);
  const { open, onToggle, registerTriggerRef } = usePopOver();
  const a11y = useAriaAttributes(id).menuTriggerA11y(Boolean(id && open[id]));

  return (
    <button
      {...props}
      {...a11y}
      className={classNames}
      data-id={id}
      data-type="trigger"
      ref={(node) => (id ? registerTriggerRef(node, id) : undefined)}
      onClick={() => id && onToggle(id)}
    >
      {children}
    </button>
  );
};
