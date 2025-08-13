import { Color, Size } from '@src/stories/overlays/arrow';
import { CommonPanelProps } from '@src/stories/overlays/pop-over';
import { HTMLAttributes } from 'react';
import { Placement } from '@src/stories/overlays/pop-over';

type Panel = Omit<HTMLAttributes<HTMLDivElement>, 'id'>;

export interface MenuPanelProps extends Panel, CommonPanelProps {
  arrowColor?: Color | 'default';
  arrowPlacement?: Placement;
  arrowSize?: Size;
  arrowGap?: number;
  type?: 'floating' | 'expand' | 'slide';
}
