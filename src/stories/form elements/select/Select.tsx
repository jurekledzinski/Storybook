import SelectProvider from './context/SelectProvider';
import { SelectProps, Option } from './types';
import { useLoadPosition } from './hooks/useLoadPosition';
import { useRef } from 'react';

export const Select = <T extends Option = Option>({
  children,
  ...props
}: SelectProps<T>) => {
  const selectRef = useRef<HTMLDivElement | null>(null);
  const position = useLoadPosition(selectRef);

  return (
    <div ref={selectRef}>
      <SelectProvider<T>
        value={{
          position,
          ...props,
        }}
      >
        {children}
      </SelectProvider>
    </div>
  );
};
