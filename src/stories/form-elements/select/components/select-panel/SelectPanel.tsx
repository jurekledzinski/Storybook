import { Option, PopOver } from '@src/stories/overlays/popover';
import { SelectPanelProps } from './types';

export const SelectPanel = <T extends Option = Option>({
  children,
}: SelectPanelProps<T>) => {
  return <PopOver>{children}</PopOver>;
};
