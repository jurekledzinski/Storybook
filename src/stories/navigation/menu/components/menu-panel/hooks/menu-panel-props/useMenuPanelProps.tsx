import { filterProps } from '@src/stories/helpers';
import { UseMenuPanelProps } from './types';

export const useMenuPanelProps = ({
  autoWidth,
  gap,
  id,
  open,
  panelRef,
  placement,
  type = 'floating',
  getTriggerRect,
  refreshTriggerRect,
  ...restProps
}: UseMenuPanelProps) => {
  const positioningProps = () => ({
    autoWidth,
    gap,
    id,
    open: open[id],
    panelRef,
    placement,
    type,
    getTriggerRect,
    refreshTriggerRect,
  });

  const groupPopoverProps = () => {
    const rest = filterProps(restProps, [
      'arrowColor',
      'arrowGap',
      'arrowPlacement',
      'arrowSize',
    ]);

    return {
      'data-id': id,
      'data-placement': placement,
      id: `${id}-panel`,
      open: open[id],
      ref: panelRef,
      ...rest,
    };
  };

  const positionProps = positioningProps();
  const popoverProps = groupPopoverProps();

  return { positionProps, popoverProps };
};
