import { Position } from '../context/types';

export type UseSetPositionPopOverProps = {
  gap: number;
  isOpen?: boolean;
  panelRef: React.RefObject<HTMLDivElement>;
  parentRef: React.RefObject<HTMLDivElement> | null;
};

export type NewPosition = Omit<Position, 'h'>;
