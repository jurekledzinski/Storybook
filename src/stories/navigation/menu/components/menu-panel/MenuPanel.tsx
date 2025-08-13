import { Arrow } from '@src/stories/overlays/arrow';
import { MenuPanelProps } from './types';
import { PopOver } from '@src/stories/overlays/pop-over';
import { useMenuPanelController } from '../../hooks';

export const MenuPanel = ({ children, ...props }: MenuPanelProps) => {
  const {
    a11y,
    arrowProps,
    getTriggerRect,
    popoverProps,
    positionProps,
    handlers,
    onSetPosition,
  } = useMenuPanelController(props);

  if (positionProps.type === 'floating') {
    return (
      <PopOver
        {...a11y}
        {...popoverProps}
        onEntering={() => {
          onSetPosition(undefined, undefined, getTriggerRect(props.id));
        }}
        onEntered={handlers.onEntered}
        onExited={handlers.onExited}
      >
        {children}
        {arrowProps.placement ? <Arrow {...arrowProps} /> : null}
      </PopOver>
    );
  }

  return null;
};
