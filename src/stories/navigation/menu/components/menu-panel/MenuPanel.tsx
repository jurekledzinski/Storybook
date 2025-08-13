import { Arrow } from '@src/stories/overlays/arrow';
import { groupArrowProps } from './utils';
import { MenuPanelProps } from './types';
import { PopOver } from '@src/stories/overlays/pop-over';
import { useAriaAttributes } from '@src/stories/hooks';
import { useEnterExit, useMenuPanelProps } from './hooks';
import { useMenu } from '@src/stories/navigation/menu/store';
import { usePopOver } from '@src/stories/overlays/pop-over/store';
import { usePosition } from '@src/stories/overlays/pop-over/hooks';
import { useRef } from 'react';

export const MenuPanel = ({ children, ...props }: MenuPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  const { mapRefs, open, onCloseAll, getTriggerRect, refreshTriggerRect } =
    usePopOver();

  const { onKeyArrow, onKeyArrowNested, onKeyPress, mapPlacements } = useMenu();

  const a11y = useAriaAttributes(props.id).menuPanelA11y();

  const fn = useEnterExit({
    mapPlacements,
    mapRefs,
    onCloseAll,
    open,
    panelRef,
    onKeyArrow,
    onKeyArrowNested,
    onKeyPress,
    panelId: props.id,
    placement: props.placement,
  });

  const group = useMenuPanelProps({
    ...props,
    open,
    panelRef,
    getTriggerRect,
    refreshTriggerRect,
  });

  const { arrowPlacement, onSetPosition } = usePosition(group.positionProps);
  const arrowProps = groupArrowProps(props, arrowPlacement);

  if (group.positionProps.type === 'floating') {
    return (
      <PopOver
        {...a11y}
        {...group.popoverProps}
        onEntering={() => {
          onSetPosition(undefined, undefined, getTriggerRect(props.id));
        }}
        onEntered={fn.onEntered}
        onExited={fn.onExited}
      >
        {children}
        {arrowProps.placement ? <Arrow {...arrowProps} /> : null}
      </PopOver>
    );
  }

  return null;
};
