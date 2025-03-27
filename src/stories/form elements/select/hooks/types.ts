import { Position } from '../context/types';

export type UseSetPositionPanel = {
  gap: number;
  isOpen?: boolean;
  position: Position;
  ref: React.RefObject<HTMLDivElement>;
};

export type NewPosition = Omit<Position, 'h'>;
