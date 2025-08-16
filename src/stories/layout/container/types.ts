import { MaxWidthToken, SpacingToken } from '@src/stories/types';

export interface ContainerProps extends SpacingToken {
  as?: 'div' | 'main' | 'section';
  className?: string;
  children?: React.ReactNode;
  maxWidth?: MaxWidthToken;
}
