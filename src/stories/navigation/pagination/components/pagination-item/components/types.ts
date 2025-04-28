import { ActionType } from '../../../hooks';
import { ButtonPagination } from '../types';
import { UiPagination } from '../../../types';

export interface PaginationItemProps extends ButtonPagination, UiPagination {
  onClick: (actionType: ActionType, value?: number) => void;
  page: number;
  isActive?: boolean;
}
