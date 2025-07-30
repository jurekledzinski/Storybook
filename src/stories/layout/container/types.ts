import { MarginToken, MaxWidthToken, PaddingToken } from '@src/stories/types';

export interface ContainerProps {
  as?: 'div' | 'main' | 'section';
  children?: React.ReactNode;
  maxWidth?: MaxWidthToken;
  padding?: PaddingToken;
  margin?: MarginToken;
}
