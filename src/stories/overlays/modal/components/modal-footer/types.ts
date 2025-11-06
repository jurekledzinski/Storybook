import { Color } from '@src/stories/types';
import { MouseEventHandler } from 'react';

export type ModalFooterProps = {
  confirmText?: string;
  cancelText?: string;
  color?: Color;
  isPending?: boolean;
  onCancel?: MouseEventHandler<HTMLButtonElement>;
  onConfirm?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
};
