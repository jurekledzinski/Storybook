import { useRef } from 'react';
import PopOverProvider, {
  ParentPopOverProps,
  Option,
} from '@src/stories/overlays/popover';

export const Select = <T extends Option = Option>({
  children,
  ...props
}: ParentPopOverProps<T>) => {
  const parentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={parentRef}>
      <PopOverProvider<T>
        value={{
          parentRef,
          ...props,
        }}
      >
        {children}
      </PopOverProvider>
    </div>
  );
};
