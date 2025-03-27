import { getClassNamesInputWrapper } from '../utils/classNames';
import { Icon } from '../../../graphics/icon/Icon';
import { InputWrapperProps } from '../types';
import { Loader } from '../../../feedbacks/loader/Loader';
import {
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

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
          <Icon icon={startIcon} size="1x" />
        </span>
      )}

      {children}

      {isPending ? (
        <span className={classes.endIcon}>
          <Loader sizeSchema="size-sm" />
        </span>
      ) : endIcon && isError === undefined ? (
        <span className={classes.endIcon} tabIndex={0} onClick={onClickEndIcon}>
          <Icon icon={endIcon} size="1x" />
        </span>
      ) : null}

      {isError !== undefined && !isPending ? (
        isError ? (
          <span className={classes.statusIcon}>
            <Icon icon={faExclamationCircle} size="1x" />
          </span>
        ) : (
          <span className={classes.statusIcon}>
            <Icon icon={faCheckCircle} size="1x" />
          </span>
        )
      ) : null}
    </div>
  );
};
