import { CheckCircle, WarningCircle } from '@phosphor-icons/react';
import { getClassNamesInputWrapper } from '../styles/styles';
import { InputWrapperProps } from '../types';
import { Loader } from '../../../feedbacks/loader/Loader';

export const InputWrapper = ({
  disabled,
  children,
  endIcon,
  isError,
  isPending,
  onClickEndIcon,
  onClickStartIcon,
  size,
  startIcon,
  readOnly,
  variant,
}: InputWrapperProps) => {
  const classes = getClassNamesInputWrapper(
    variant,
    size,
    isError,
    disabled,
    readOnly
  );

  return (
    <div className={classes.inputWrapper}>
      {startIcon && (
        <span className={classes.startIcon} onClick={onClickStartIcon}>
          {startIcon}
        </span>
      )}

      {children}

      {isPending ? (
        <span className={classes.endIcon}>
          <Loader sizeSchema="small" />
        </span>
      ) : endIcon && isError === undefined ? (
        <span className={classes.endIcon} tabIndex={0} onClick={onClickEndIcon}>
          {endIcon}
        </span>
      ) : null}

      {isError !== undefined && !isPending ? (
        isError ? (
          <span className={classes.statusIcon}>
            <WarningCircle size={16} weight="fill" />
          </span>
        ) : (
          <span className={classes.statusIcon}>
            <CheckCircle size={16} weight="fill" />
          </span>
        )
      ) : null}
    </div>
  );
};
