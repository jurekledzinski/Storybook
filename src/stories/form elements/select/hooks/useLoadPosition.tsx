import { Position } from '../context/types';
import { useEffect, useState } from 'react';

export const useLoadPosition = (ref: React.RefObject<HTMLDivElement>) => {
  const [position, setPosition] = useState<Position>({
    h: 0,
    w: 0,
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    setPosition({ x: rect.left, y: rect.top, h: rect.height, w: rect.width });
  }, [ref]);

  return position;
};
