import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Popover, useClickOutside, usePosition, useTriggerRefs } from '@src/stories';
import { useMenuTriggerProps } from './types';

export const useMenuTrigger = ({ children, id = 'root' }: useMenuTriggerProps) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const { getTriggerRect, updateTriggerRect, setTrigger, triggers } = useTriggerRefs();

  const [menuTrigger, menu] = React.Children.toArray(children);

  useEffect(() => setTrigger(triggerRef.current, 'root'), [setTrigger]);

  const { onSetPosition } = usePosition({
    autoWidth: true,
    id,
    open,
    panelRef,
    placement: 'bottom',
    getTriggerRect,
    updateTriggerRect,
  });

  useClickOutside({
    onClick: useCallback(() => setOpen(false), []),
    onLoadRefs: useCallback(
      () => [
        ...Object.entries(triggers.current)
          .filter(([key]) => key.includes('root'))
          .map((i) => i[1]),
      ],
      [triggers]
    ),
  });

  return (
    <>
      <div
        onClick={() => setOpen((prev) => !prev)}
        ref={triggerRef}
        style={{ width: 'fit-content' }}
      >
        {menuTrigger}
      </div>
      <Popover
        ref={panelRef}
        open={open}
        onEntering={() => onSetPosition(undefined, undefined, getTriggerRect('root'))}
      >
        {menu}
      </Popover>
    </>
  );
};
