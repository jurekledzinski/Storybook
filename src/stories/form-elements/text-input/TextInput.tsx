import styles from './TextInput.module.css';
import { forwardRef, Ref } from 'react';
import { getInputProps } from './utils';
import { Input, InputWrapper } from '@src/stories/form-elements/input';
import { TextInputProps } from './types';

export const TextInput = forwardRef<
  HTMLTextAreaElement | HTMLInputElement,
  TextInputProps
>(
  (
    {
      as = 'input',
      endIcon,
      isError,
      isPending,
      startIcon,
      type = 'text',
      onClickEndIcon,
      onClickStartIcon,
      ...props
    },
    ref: Ref<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    return (
      <div className={styles.textInput}>
        <InputWrapper
          as={as}
          isError={isError}
          isPending={isPending}
          onClickEndIcon={onClickEndIcon}
          onClickStartIcon={onClickStartIcon}
          {...(endIcon && { endIcon: endIcon[0] })}
          {...(startIcon && { startIcon: startIcon[0] })}
          {...props}
        >
          <Input ref={ref} {...getInputProps(as, type, isError)} {...props} />
        </InputWrapper>
      </div>
    );
  }
);
