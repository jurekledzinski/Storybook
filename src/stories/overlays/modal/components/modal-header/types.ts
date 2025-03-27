import { MouseEventHandler } from 'react';
import { IconBaseButtonProps } from '../../../../buttons/icon-button/types';
export type Variant = IconBaseButtonProps['color'];

export type ModalHeaderProps = {
  title: string;
  variant?: Variant;
  onClose?: MouseEventHandler<HTMLButtonElement>;
};
