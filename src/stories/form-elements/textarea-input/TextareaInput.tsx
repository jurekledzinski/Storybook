import { forwardRef } from 'react';
import { InputWrapper } from '@src/stories/form-elements/input';
import { Textarea } from '../textarea';
import { TextareaProps } from './types';

export const TextareaInput = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ endIcon, isPending, startIcon, ...props }, ref) => {
    return (
      <InputWrapper
        {...props}
        as="textarea"
        isPending={isPending}
        isEndIcon={!!endIcon && Boolean(props.value)}
        isStartIcon={!!startIcon}
      >
        <Textarea {...props} ref={ref} />
      </InputWrapper>
    );
  }
);

TextareaInput.displayName = 'TextareaInput';
