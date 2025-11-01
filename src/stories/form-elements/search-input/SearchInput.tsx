import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { forwardRef } from 'react';
import { IconEnd, IconStart, InputWrapper } from '../input/components';
import { Input } from '../input';
import { SearchInputProps } from './types';

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      endIcon = faXmark,
      label,
      startIcon = faMagnifyingGlass,
      isPending,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <InputWrapper
        as="input"
        isPending={isPending}
        isEndIcon={!!endIcon && Boolean(props.value)}
        isStartIcon={!!startIcon}
        {...props}
      >
        <IconStart icon={startIcon} />
        <Input label={label} {...props} ref={ref} />
        {props.value ? <IconEnd icon={endIcon} onClick={onClick} /> : null}
      </InputWrapper>
    );
  }
);

SearchInput.displayName = 'SearchInput';
