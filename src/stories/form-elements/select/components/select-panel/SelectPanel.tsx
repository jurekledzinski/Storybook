import { SelectPanelProps } from './types';
import { useRef } from 'react';
import {
  PopOver,
  usePopOver,
  usePosition,
} from '@src/stories/overlays/pop-over';

export const SelectPanel = ({ children }: SelectPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const { open, triggerRefs } = usePopOver();
  const isOpen = open['root'];
  const { onSetPosition } = usePosition({
    autoWidth: true,
    id: 'root',
    open: isOpen,
    panelRef,
    placement: 'bottom start',
    triggerRefs,
  });

  return (
    <PopOver ref={panelRef} open={isOpen} onEntering={() => onSetPosition()}>
      {children}
    </PopOver>
  );
};
