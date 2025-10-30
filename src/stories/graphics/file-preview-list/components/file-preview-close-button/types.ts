import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { MouseEventHandler } from 'react';

export type FilePreviewCloseButtonProps = {
  icon?: IconProp;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
