import { MouseEventHandler } from 'react';

export type Variant =
  | 'delete'
  | 'info'
  | 'neutral'
  | 'primary'
  | 'success'
  | 'warning';

export type ModalHeaderProps = {
  title: string;
  variant?: Variant;
  onClose?: MouseEventHandler<HTMLButtonElement>;
};
