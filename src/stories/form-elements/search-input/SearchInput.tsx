import { forwardRef } from 'react';
import { Input } from '../input/Input';
import { InputWrapper } from '../input/components';
import { SearchInputProps } from './types';

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ endIcon, startIcon, isPending, ...props }, ref) => {
    return (
      <InputWrapper
        as="input"
        dividerStart={true}
        dividerEnd={true}
        isPending={isPending}
        {...(endIcon && { endIcon: endIcon[0] })}
        {...(startIcon && { startIcon: startIcon[0] })}
        {...props}
      >
        <Input ref={ref} {...props} />
      </InputWrapper>
    );
  }
);

SearchInput.displayName = 'SearchInput';
