import { ButtonHTMLAttributes } from 'react';
import { SelectTriggerProps } from '../select-trigger';

type PickKeys = 'label' | 'size' | 'variant' | 'isError' | 'disabled';

export type SelectButtonProps = Pick<SelectTriggerProps, PickKeys> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'>;
