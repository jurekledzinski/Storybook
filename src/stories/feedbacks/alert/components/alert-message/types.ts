import { Size } from '@src/stories/types';

export type AlertMessageProps = {
  message: string;
  size?: Omit<Size, 'size-md' | 'size-lg'>;
};
