import styles from './TextInput.module.css';
import { getInputProps } from './utils';
import { Input, InputWrapper } from '@src/stories/form-elements/input';
import { TextInputProps } from './types';

export const TextInput = ({
  as = 'input',
  endIcon,
  isError,
  isPending,
  startIcon,
  type = 'text',
  onClickEndIcon,
  onClickStartIcon,
  ...props
}: TextInputProps) => {
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
        <Input as={as} {...getInputProps(as, type, isError)} {...props} />
      </InputWrapper>
    </div>
  );
};
