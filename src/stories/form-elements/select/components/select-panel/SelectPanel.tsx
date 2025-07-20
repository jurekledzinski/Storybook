import { SelectPanelProps } from './types';
import { useAriaAttributes } from '@src/stories/hooks';
import { useRef } from 'react';
import {
  PopOver,
  usePopOver,
  usePosition,
} from '@src/stories/overlays/pop-over';

export const SelectPanel = ({ children }: SelectPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const { open, triggerRefs } = usePopOver();

  const { selectPanelA11y } = useAriaAttributes();

  const { onSetPosition } = usePosition({
    autoWidth: true,
    id: 'root',
    open: open['root'],
    panelRef,
    placement: 'bottom start',
    triggerRefs,
  });

  return (
    <PopOver
      ref={panelRef}
      open={open['root']}
      onEntering={() => onSetPosition()}
      {...selectPanelA11y()}
    >
      {children}
    </PopOver>
  );
};
