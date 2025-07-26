import { SortArrowsProps } from './types';
import { Icon } from '@src/stories/graphics/icon';

export const SortArrows = <T extends object>({
  icons,
  header,
}: SortArrowsProps<T>) => {
  return (
    <span>
      {{
        asc: <Icon icon={icons[0]} />,
        desc: <Icon icon={icons[1]} />,
      }[header.column.getIsSorted() as string] ?? null}
    </span>
  );
};
