import { Border, Size } from '../../types/ui';

type SizeSchema =
  | Size
  | 'inner-size-xs'
  | 'inner-size-sm'
  | 'inner-size-md'
  | 'inner-size-lg';

export type LoaderProps = {
  colorTrack?: string;
  colorSpin?: string;
  size?: number;
  sizeSchema?: SizeSchema;
  position?: 'center';
  border?: Border;
};
