import { forwardRef } from 'react';
import { IconEnd, IconStatus, InputLoader, InputWrapper } from '../input';
import { Textarea } from '../textarea';
import { TextareaProps } from './types';

export const TextareaInput = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ endIcon, isPending, startIcon, onClick, ...props }, ref) => {
    return (
      <InputWrapper
        {...props}
        as="textarea"
        isPending={isPending}
        isEndIcon={!!endIcon}
        isStartIcon={!!startIcon}
      >
        <Textarea {...props} ref={ref} />
        <InputLoader />
        <IconStatus />
        {endIcon ? <IconEnd icon={endIcon} onClick={onClick} /> : null}
      </InputWrapper>
    );
  }
);

TextareaInput.displayName = 'TextareaInput';
