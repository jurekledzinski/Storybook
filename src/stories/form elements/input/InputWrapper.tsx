import styles from './InputWrapper.module.css';
import { Check, Warning } from '@phosphor-icons/react';
import { classNames } from '../../helpers/classNames';
import { InputWrapperProps } from './types';
import { Loader } from '../../feedbacks/loader/Loader';

export const InputWrapper = ({
  children,
  endIcon,
  isError,
  isPending,
  onClickEndIcon,
  onClickStartIcon,
  size,
  startIcon,
  variant,
}: InputWrapperProps) => {
  const inputWrapperClassNames = classNames(
    styles.inputWrapper,
    styles[variant as keyof typeof styles]
  );

  const startIconClassNames = classNames(
    styles.startIcon,
    styles[variant as keyof typeof styles],
    styles[size as keyof typeof styles]
  );

  const endIconClassNames = classNames(
    styles.endIcon,
    styles[variant as keyof typeof styles],
    styles[size as keyof typeof styles]
  );

  //   const validClassNames = classNames(endIconClassNames);
  //   const inValidClassNames = classNames(endIconClassNames);

  return (
    <div className={inputWrapperClassNames}>
      {startIcon && (
        <span className={startIconClassNames} onClick={onClickStartIcon}>
          {startIcon}
        </span>
      )}

      {children}

      {isPending ? (
        <span className={endIconClassNames}>
          <Loader sizeSchema="small" />
        </span>
      ) : endIcon && isError === undefined ? (
        <span
          className={endIconClassNames}
          tabIndex={0}
          onClick={onClickEndIcon}
        >
          {endIcon}
        </span>
      ) : null}

      {isError !== undefined && !isPending ? (
        isError ? (
          <span className={endIconClassNames}>
            <Warning size={16} weight="bold" />
          </span>
        ) : (
          <span className={endIconClassNames}>
            <Check size={16} weight="bold" />
          </span>
        )
      ) : null}
    </div>
  );
};
