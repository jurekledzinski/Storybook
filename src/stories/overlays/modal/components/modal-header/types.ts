import { IconBaseButtonProps } from '@src/stories/buttons/icon-button';
import { MouseEventHandler } from 'react';
export type Variant = IconBaseButtonProps['color'];

export type ModalHeaderProps = {
  title: string;
  variant?: Variant;
  onClose?: MouseEventHandler<HTMLButtonElement>;
};
