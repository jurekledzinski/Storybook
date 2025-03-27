import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type Border =
  | 'border-xs'
  | 'border-sm'
  | 'border-md'
  | 'border-lg'
  | 'border-xl';

export type Radius =
  | 'radius-xs'
  | 'radius-sm'
  | 'radius-md'
  | 'radius-lg'
  | 'radius-xl';

export type Size = 'size-xs' | 'size-sm' | 'size-md' | 'size-lg';

export type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'negative'
  | 'warning';

export type Variant = 'contained' | 'outlined' | 'text';

export type Icon = IconProp;
