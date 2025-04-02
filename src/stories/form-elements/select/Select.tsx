import { useRef } from 'react';
import PopOverProvider, {
  ParentPopOverProps,
  Option,
} from '@src/stories/overlays/popover';

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
