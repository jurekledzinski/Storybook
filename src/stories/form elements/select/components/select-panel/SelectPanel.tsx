import { Option } from '../../../../overlays/popover/types';
import { PopOver } from '../../../../overlays/popover/PopOver';
import { SelectPanelProps } from './types';

export const SelectPanel = <T extends Option = Option>({
  children,
}: SelectPanelProps<T>) => {
  return <PopOver>{children}</PopOver>;
};
