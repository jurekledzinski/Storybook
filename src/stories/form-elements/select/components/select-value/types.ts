import { MouseEventHandler } from 'react';

export type SelectValueProps = {
  placeholder: string;
  value?: string | string[];
  onDelete?: MouseEventHandler<HTMLButtonElement>;
};
