import { Icon } from '@src/stories/graphics/icon';
import { PaginationDotsProps } from './types';

export const PaginationDots = ({ icon }: PaginationDotsProps) => {
  return (
    <button>
      <Icon icon={icon!} />
    </button>
  );
};
