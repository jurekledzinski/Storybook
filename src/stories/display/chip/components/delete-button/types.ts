import { HTMLAttributes, MouseEventHandler } from 'react';

export interface DeleteButtonProps extends HTMLAttributes<HTMLSpanElement> {
  onDelete?: MouseEventHandler<HTMLSpanElement>;
}
