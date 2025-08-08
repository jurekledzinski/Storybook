import { arrowFlip } from './helpers';
import { Placement, setPosition } from '@src/stories/overlays/pop-over';
import { SizeWindow, UsePositionProps } from './types';
import { useCallback, useRef, useState } from 'react';
import { usePanelSize } from '../panel-size';
import { useWindowResize } from '@src/stories/hooks';
import {
  checkHorizontalSpace,
  checkVerticalSpace,
  getCheckSpace,
  getPanelDirection,
  getPanelRect,
  setNewPosition,
  updateSizeWindow,
} from './helpers';

export const usePosition = ({
  autoWidth = true,
  gap = 8,
  id,
  panelRef,
  placement = 'bottom',
  open,
  type = 'floating',
  getTriggerRect,
  refreshTriggerRect,
}: UsePositionProps) => {
  const sizeWindow = useRef({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [arrowPlacement, setArrowPlacement] = useState<Placement>(placement);

  const { heightPanel, widthPanel } = usePanelSize(panelRef, open);

  const onFlip = useCallback((value: Placement) => {
    const flip = arrowFlip(value);
    setArrowPlacement((prev) => (prev !== flip ? flip : prev));
  }, []);

  console.log('sizeWindow', sizeWindow);

  const onSetPosition = useCallback(
    (dynamic?: Placement, el?: SizeWindow, triggerPosition?: DOMRect) => {
      if (type !== 'floating' || !panelRef.current || !triggerPosition) return;

      const size = updateSizeWindow(el, sizeWindow);

      const panelDirection = getPanelDirection(placement, dynamic);

      const panelRect = getPanelRect(panelRef.current, widthPanel, heightPanel);

      console.log('triggerPosition onSetPosition', triggerPosition);

      const canPlace = getCheckSpace({
        triggerPosition,
        panelWidth: panelRect.panelWidth,
        panelHeight: panelRect.panelHeight,
        gap,
        width: size.width,
      });

      const updatedPosition = setPosition({
        currentPlacement: panelDirection.currentPlacement,
        panelPosition: panelRect.panelPosition,
        triggerPosition,
        size,
        panelWidth: panelRect.panelWidth,
        panelHeight: panelRect.panelHeight,
        panelStyle: panelRect.panelStyle,
        autoWidth,
      });

      const horiontalFlip = checkHorizontalSpace({
        canPlaceRight: canPlace.canPlaceRight,
        canPlaceLeft: canPlace.canPlaceLeft,
        mainDirection: panelDirection.mainDirection,
        currentPlacement: panelDirection.currentPlacement,
        mainDefault: placement,
        alignment: panelDirection.alignment,
      });

      if (horiontalFlip) {
        onFlip(horiontalFlip);
        // return onSetPosition(horiontalFlip);
        return onSetPosition(horiontalFlip, undefined, triggerPosition);
      }

      const verticalFlip = checkVerticalSpace({
        canPlaceTop: canPlace.canPlaceTop,
        canPlaceBottom: canPlace.canPlaceBottom,
        mainDirection: panelDirection.mainDirection,
        currentPlacement: panelDirection.currentPlacement,
        mainDefault: placement,
        alignment: panelDirection.alignment,
      });

      if (verticalFlip) {
        onFlip(verticalFlip);
        // return onSetPosition(verticalFlip);
        return onSetPosition(verticalFlip, undefined, triggerPosition);
      }

      setNewPosition({
        autoWidth,
        gap,
        mainDirection: panelDirection.mainDirection,
        panelRef,
        updatedPosition,
      });
      onFlip(panelDirection.currentPlacement);
    },
    [autoWidth, gap, panelRef, placement, widthPanel, heightPanel, type, onFlip]
  );

  useWindowResize({
    onResize: useCallback(
      (el) => {
        if (open) {
          refreshTriggerRect(id);
          const rect = getTriggerRect(id);
          const size = { h: el.scrollHeight, w: el.offsetWidth };
          onSetPosition(placement, size, rect);
          console.log('CALL ----------------->');
        } else {
          refreshTriggerRect(id);
        }
      },
      [getTriggerRect, id, open, onSetPosition, placement, refreshTriggerRect]
    ),
  });

  return { arrowPlacement, onSetPosition };
};
