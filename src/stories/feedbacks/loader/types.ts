import { Border, Size } from '../../types/ui';

type CustomSize = Size | 'size-xxs';

type SizeSchema =
  | CustomSize
  | 'inner-size-xxs'
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

export const innerSizeMap: Record<
  CustomSize,
  Extract<SizeSchema, `inner-${CustomSize}`>
> = {
  'size-xxs': 'inner-size-xxs',
  'size-xs': 'inner-size-xs',
  'size-sm': 'inner-size-sm',
  'size-md': 'inner-size-md',
  'size-lg': 'inner-size-lg',
};
