import { Color } from '@src/stories/types';

export type MessageProps = {
  children: React.ReactNode;
  color?: Omit<Color, 'primary' | 'white'>;
};
