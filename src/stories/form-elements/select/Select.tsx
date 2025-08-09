import PopOverProvider from '@src/stories/overlays/pop-over/store';
import { SelectProps } from './types';
import { SelectProvider } from './store';
import { forwardRef } from 'react';

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ children, ...props }, ref) => {
    return (
      <SelectProvider value={{ ...props, ref }}>
        <PopOverProvider>{children}</PopOverProvider>
      </SelectProvider>
    );
  }
);

Select.displayName = 'Select';
