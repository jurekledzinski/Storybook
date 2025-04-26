import { UiPagination } from '../../types';

export interface PaginationInfoProps extends UiPagination {
  itemStart: number;
  itemEnd: number;
  totalItems: number;
}
