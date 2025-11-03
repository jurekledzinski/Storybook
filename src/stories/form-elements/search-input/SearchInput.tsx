import { ControlLayout, IconEnd, IconStart } from '@src/stories/layout';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { forwardRef } from 'react';
import { Input } from '../input';
import { SearchInputProps } from './types';

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    { endIcon = faXmark, label, startIcon = faMagnifyingGlass, isPending, onClick, ...props },
    ref
  ) => {
    return (
      <ControlLayout
        {...props}
        as="input"
        isPending={isPending}
        isEndIcon={!!endIcon && Boolean(props.value)}
        isStartIcon={!!startIcon}
        isStatus={false}
      >
        <IconStart icon={startIcon} />
        <Input label={label} {...props} ref={ref} />
        {props.value ? <IconEnd icon={endIcon} onClick={onClick} /> : null}
      </ControlLayout>
    );
  }
);

SearchInput.displayName = 'SearchInput';
