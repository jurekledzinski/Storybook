import { Icons } from '@src/stories/types';
import { InputHTMLAttributes } from 'react';

export interface SelectTriggerProps
  extends InputHTMLAttributes<HTMLInputElement> {
  endIcon: Icons;
}
