import { ChangeEventHandler } from 'react';
import { PaddingToken, Size } from '@src/stories/types';

// Potem dodaj radius na header i content
// To trzeba refaktor radius-xs do r-xs, rt-xs itp rb-xs itp ...

export type AccordionHeaderProps = {
  checked?: boolean;
  id: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onChangeDelete?: ChangeEventHandler<HTMLInputElement>;
  p?: PaddingToken;
  size?: Size;
  title: string;
};
