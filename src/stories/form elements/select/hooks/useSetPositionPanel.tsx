import { NewPosition, UseSetPositionPanel } from './types';
import { useEffect, useState } from 'react';

export const useSetPositionPanel = ({
  gap,
  isOpen,
  position,
  ref,
}: UseSetPositionPanel) => {
  const [newPos, setNewPos] = useState<NewPosition>({
    x: 0,
    y: 0,
    w: 0,
  });

  const [sizeHieight, setSizeHeight] = useState(0);

  useEffect(() => {
    const check = Object.values(position).every((i) => !i);

    if (!ref.current || check) return;

    const panelHeight = ref.current.offsetHeight;
    const selectTillItsBottom = position.y + position.h;
    const spaceBelowSelect = sizeHieight - selectTillItsBottom;

    if (spaceBelowSelect < panelHeight && position.y < panelHeight) {
      setNewPos({
        x: position.x,
        y: sizeHieight - panelHeight,
        w: position.w,
      });
    } else if (spaceBelowSelect < panelHeight) {
      setNewPos({
        x: position.x,
        y: position.y - panelHeight - gap,
        w: position.w,
      });
    } else {
      setNewPos({
        x: position.x,
        y: position.y + position.h + gap,
        w: position.w,
      });
    }
  }, [gap, position, isOpen, ref, sizeHieight]);

  useEffect(() => {
    setSizeHeight(document.documentElement.scrollHeight);

    const handleResize = () => {
      setSizeHeight(document.documentElement.scrollHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return newPos;
};
