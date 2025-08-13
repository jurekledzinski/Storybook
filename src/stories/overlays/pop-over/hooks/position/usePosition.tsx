import { arrowFlip } from './helpers';
import { Placement, setPosition } from '@src/stories/overlays/pop-over';
import { SizeWindow, UsePositionProps } from './types';
import { useCallback, useRef, useState } from 'react';
import { usePanelSize } from '../panel-size';
import { useWindowResize, useWindowScroll } from '@src/stories/hooks';
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
  autoWidth = false,
  gap = 8,
  id,
  panelRef,
  placement = 'bottom',
  open,
  type = 'floating',
  getTriggerRect,
  updateTriggerRect,
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

  const onSetPosition = useCallback(
    (dynamic?: Placement, el?: SizeWindow, triggerPosition?: DOMRect) => {
      if (type !== 'floating' || !panelRef.current || !triggerPosition) return;

      const size = updateSizeWindow(el, sizeWindow);

      const panelDirection = getPanelDirection(placement, dynamic);

      const panelRect = getPanelRect(panelRef.current, widthPanel, heightPanel);

      const canPlace = getCheckSpace({
        triggerPosition,
        panelWidth: panelRect.panelWidth,
        panelHeight: panelRect.panelHeight,
        gap,
        width: size.width,
        height: size.height,
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
        return onSetPosition(horiontalFlip, el, triggerPosition);
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
        return onSetPosition(verticalFlip, el, triggerPosition);
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
    onResize: useCallback(() => {
      if (open) {
        //tu aktualizuje pozycje trigger
        updateTriggerRect(id);
        // tu pobieram aktualną pozycje trigger
        const rect = getTriggerRect(id);
        const size = { h: window.innerHeight, w: window.innerWidth };
        onSetPosition(placement, size, rect);
      } else {
        updateTriggerRect(id);
      }
    }, [getTriggerRect, id, open, onSetPosition, placement, updateTriggerRect]),
  });

  // na skrol aktualizuje pozycje trigger ref dynamicznie ponieważ id będzie albo statyczne root jeden panel albo dynamiczne
  useWindowScroll({
    onScroll: () => updateTriggerRect(id),
  });

  return { arrowPlacement, onSetPosition };
};
