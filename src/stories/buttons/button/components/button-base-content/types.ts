import { Icon, Size } from '@src/stories/types/ui';

export type ButtonBaseContentProps = {
  isLoading?: boolean;
  iconStart?: Icon;
  iconEnd?: Icon;
  size?: Size;
  label: string;
};
