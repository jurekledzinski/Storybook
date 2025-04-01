import { NewPosition, UseSetPositionPopOverProps } from './types';
import { useCallback, useEffect, useState } from 'react';
import { useResizeObserver } from '../../../hooks/useResizeObserver';
import { useWindowResize } from '../../../hooks/useWindowResize';

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
  const [sizeHieight, setSizeHeight] = useState(0);

  useEffect(() => {
    if (!panelRef.current || !parentPosition) return;

    const panelHeight = panelRef.current.offsetHeight;
    const selectTillItsBottom = parentPosition.y + parentPosition.height;
    const spaceBelowSelect = sizeHieight - selectTillItsBottom;

    if (spaceBelowSelect < panelHeight && parentPosition.y < panelHeight) {
      setNewPos({
        x: parentPosition.x,
        y: sizeHieight - panelHeight,
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
  }, [gap, isOpen, panelRef, parentPosition, sizeHieight]);

  useResizeObserver({
    onResize: useCallback((rect) => setParentPosition(rect), []),
    ref: parentRef,
  });

  useWindowResize({ onResize: (el) => setSizeHeight(el.scrollHeight) });

  return newPos;
};
