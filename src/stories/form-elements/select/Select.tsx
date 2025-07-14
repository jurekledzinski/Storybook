import PopOverProvider from '@src/stories/overlays/pop-over/store';
import { SelectProps } from './types';
import { SelectProvider } from './store';

export const Select = ({ children, ...props }: SelectProps) => {
  return (
    <div>
      <SelectProvider value={props}>
        <PopOverProvider>{children}</PopOverProvider>
      </SelectProvider>
    </div>
  );
};
