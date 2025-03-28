import styles from './TextInput.module.css';
import { getInputProps } from './helpers/helpers';
import { Input } from '../input/Input';
import { InputWrapper } from '../input/components/InputWrapper';
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
        isError={isError}
        isPending={isPending}
        onClickEndIcon={onClickEndIcon}
        onClickStartIcon={onClickStartIcon}
        {...(endIcon && { endIcon: endIcon[0] })}
        {...(startIcon && { startIcon: startIcon[0] })}
        {...props}
      >
        <Input as={as} {...getInputProps(as, type)} {...props} />
      </InputWrapper>
    </div>
  );
};
