import { getClassNamesInputWrapper } from '../../../../input/utils/classNames';
import { Icon } from '../../../../../graphics/icon/Icon';
import { Loader } from '../../../../../feedbacks/loader/Loader';
import { SelectDisplayWrapperProps } from './types';
import {
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

export const SelectDisplayWrapper = ({
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
}: SelectDisplayWrapperProps) => {
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
          <Icon icon={startIcon[0]} size="1x" />
        </span>
      )}

      {children}

      {isPending ? (
        <span className={classes.endIcon}>
          <Loader sizeSchema="size-sm" />
        </span>
      ) : endIcon && isError === undefined ? (
        <span className={classes.endIcon} tabIndex={0} onClick={onClickEndIcon}>
          <Icon icon={endIcon[0]} size="1x" />
        </span>
      ) : null}

      {isError !== undefined && !isPending ? (
        isError ? (
          <span className={classes.statusIcon}>
            <Icon icon={faCheckCircle} size="1x" />
          </span>
        ) : (
          <span className={classes.statusIcon}>
            <Icon icon={faExclamationCircle} size="1x" />
          </span>
        )
      ) : null}
    </div>
  );
};
