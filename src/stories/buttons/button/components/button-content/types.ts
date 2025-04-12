import { Icons, Size } from '@src/stories/types/ui';

export type ButtonContentProps = {
  isLoading?: boolean;
  iconStart?: Icons;
  iconEnd?: Icons;
  size?: Size;
  label: string;
};
