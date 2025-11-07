import PopoverProvider from '@src/stories/overlays/pop-over/store';
import { SelectProps } from './types';
import { SelectProvider } from './store';

export const Select = ({ children, ...props }: SelectProps) => {
  return (
    <SelectProvider value={props}>
      <PopoverProvider>{children}</PopoverProvider>
    </SelectProvider>
  );
};
