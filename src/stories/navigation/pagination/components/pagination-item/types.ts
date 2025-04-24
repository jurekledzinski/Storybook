import { UiPagination } from '../../types';

export interface PaginationItemProps extends UiPagination {
  isActive: boolean;
  page: number;
  onClick: () => void;
}
