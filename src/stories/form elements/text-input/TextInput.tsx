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
        endIcon={endIcon}
        isError={isError}
        isPending={isPending}
        startIcon={startIcon}
        onClickEndIcon={onClickEndIcon}
        onClickStartIcon={onClickStartIcon}
        {...props}
      >
        <Input as={as} {...getInputProps(as, type)} {...props} />
      </InputWrapper>
    </div>
  );
};
