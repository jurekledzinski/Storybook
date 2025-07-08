import { NewPosition, UseSetPositionPopOverProps } from './types';
import { useCallback, useEffect, useState } from 'react';
import { useResizeObserver, useWindowResize } from '@src/stories/hooks';

export const useSetPositionPopOver = ({
  gap,
  isOpen,
  panelRef,
  parentRef,
}: UseSetPositionPopOverProps) => {
  const [newPos, setNewPos] = useState<NewPosition>({
    x: 0,
    y: 0,
    w: 0,
  });

  const [parentPosition, setParentPosition] = useState<DOMRect>();
  const [sizeHeight, setSizeHeight] = useState(0);

  useEffect(() => {
    if (!panelRef.current || !parentPosition) return;

    const panelHeight = panelRef.current.offsetHeight;
    const selectTillItsBottom = parentPosition.y + parentPosition.height;
    const spaceBelowSelect = sizeHeight - selectTillItsBottom;

    if (spaceBelowSelect < panelHeight && parentPosition.y < panelHeight) {
      setNewPos({
        x: parentPosition.x,
        y: sizeHeight - panelHeight,
        w: parentPosition.width,
      });
    } else if (spaceBelowSelect < panelHeight) {
      setNewPos({
        x: parentPosition.x,
        y: parentPosition.y - panelHeight - gap,
        w: parentPosition.width,
      });
    } else {
      setNewPos({
        x: parentPosition.x,
        y: parentPosition.y + parentPosition.height + gap,
        w: parentPosition.width,
      });
    }
  }, [gap, isOpen, panelRef, parentPosition, sizeHeight]);

  useResizeObserver({
    onResize: useCallback((rect) => setParentPosition(rect), []),
    ref: parentRef,
  });

  useWindowResize({ onResize: (el) => setSizeHeight(el.scrollHeight) });

  return newPos;
};
