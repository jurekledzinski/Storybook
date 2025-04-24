import { Color, Size, Spacing, Variant } from '@src/stories/types';

export type UiPagination = {
  color?: Extract<Color, 'primary' | 'secondary'>;
  size?: Size;
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
  onChangePage: OnChangePage;
}
