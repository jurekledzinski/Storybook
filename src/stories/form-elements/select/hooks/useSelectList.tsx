import { usePopover, usePosition } from '@src/stories/overlays/pop-over';
import { useRef } from 'react';

export const useSelectList = () => {
  const panelRef = useRef<HTMLDivElement>(null);
  const { open, getTriggerRect, updateTriggerRect } = usePopover();

  const { onSetPosition } = usePosition({
    autoWidth: true,
    open,
    panelRef,
    placement: 'bottom start',
    getTriggerRect,
    updateTriggerRect,
  });

  const onEntering = () => onSetPosition(undefined, undefined, getTriggerRect());

  return { panelRef, open, onEntering };
};
