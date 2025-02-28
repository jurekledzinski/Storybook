import { MouseEventHandler } from 'react';
import { Variant } from '../modal-header/types';

export type ModalFooterProps = {
  cancelText?: string;
  confirmText: string;
  onCancel?: MouseEventHandler<HTMLButtonElement>;
  onConfirm?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  variant: Variant;
};
