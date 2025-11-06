import { Border, Radius, Size, Spacing, Variant } from '@src/stories/types';

export type UiPagination = {
  border?: Border;
  color?: 'primary' | 'secondary';
  radius?: Radius;
  size?: Size | 'size-xxs';
  spacing?: Spacing;
  variant?: Variant;
};

export type UxPagination = {
  totalPages: number;
  maxRange?: number;
  perPage?: number[];
};

export type OnChangePage = (page: number, pageSize: number) => void;

export interface PaginationProps extends UiPagination, UxPagination {
  children?: React.ReactNode;
  onChangePage?: OnChangePage;
}
