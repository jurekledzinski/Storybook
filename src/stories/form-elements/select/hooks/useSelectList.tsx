import { usePopover, usePosition } from '@src/stories/overlays/pop-over';
import { useRef } from 'react';

export const useSelectList = () => {
  const panelRef = useRef<HTMLDivElement>(null);
  const { open, getTriggerRect, updateTriggerRect } = usePopover();

  const { onSetPosition } = usePosition({
    autoWidth: true,
    id: 'root',
    open: open.root,
    panelRef,
    placement: 'bottom start',
    getTriggerRect,
    updateTriggerRect,
  });

  const onEntering = () => onSetPosition(undefined, undefined, getTriggerRect('root'));

  return { panelRef, open: open.root, onEntering };
};
