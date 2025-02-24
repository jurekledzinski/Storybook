import styles from './TextInput.module.css';
import { getInputClassNames, getInputProps } from './helpers/helpers';
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
  ...props
}: TextInputProps) => {
  return (
    <div className={styles.textInput}>
      <InputWrapper
        endIcon={endIcon}
        isError={isError}
        isPending={isPending}
        startIcon={startIcon}
        {...props}
      >
        <Input
          as={as}
          isError={isError}
          {...getInputProps(as, type)}
          className={getInputClassNames(
            !!startIcon,
            !!endIcon,
            isError,
            isPending
          )}
          {...props}
        />
      </InputWrapper>
    </div>
  );
};
