import PopOverProvider from '../../overlays/popover/context/PopOverProvider';
import { Option, ParentPopOverProps } from '../../overlays/popover/types';
import { useRef } from 'react';

export const Select = <T extends Option = Option>({
  children,
  ...props
}: ParentPopOverProps<T>) => {
  const selectRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={selectRef}>
      <PopOverProvider<T>
        value={{
          parentRef: selectRef,
          ...props,
        }}
      >
        {children}
      </PopOverProvider>
    </div>
  );
};
