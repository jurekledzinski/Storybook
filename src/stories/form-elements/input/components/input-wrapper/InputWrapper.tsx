import { ButtonIcon } from '../button-icon/ButtonIcon';
import { forwardRef, Ref } from 'react';
import { getClassNamesInputWrapper } from '../../utils';
import { InputWrapperProps } from '../../types';
import { LoaderIcon } from '../loader-icon/LoaderIcon';
import { StatusIcon } from '../status-icon/StatusIcon';
import {
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

export const InputWrapper = forwardRef<HTMLDivElement, InputWrapperProps>(
  (
    { children, size = 'size-sm', variant = 'basic', ...props },
    ref: Ref<HTMLDivElement>
  ) => {
    const classes = getClassNamesInputWrapper({ ...props, size, variant });

    const {
      isError,
      isPending,
      startIcon,
      divider,
      endIcon,
      onClickStartIcon,
      onClickEndIcon,
    } = props;

    return (
      <div className={classes.inputWrapper} ref={ref}>
        {props.as === 'input' && startIcon && (
          <ButtonIcon
            className={classes.startIcon}
            icon={startIcon}
            onClick={onClickStartIcon}
          />
        )}

        {children}

        {isError !== undefined && !isPending ? (
          isError ? (
            <StatusIcon
              className={classes.statusIcon}
              icon={faExclamationCircle}
            />
          ) : (
            <StatusIcon className={classes.statusIcon} icon={faCheckCircle} />
          )
        ) : null}

        {isPending ? (
          <LoaderIcon className={classes.endIcon} size={size} />
        ) : (endIcon && isError === undefined) || (divider && endIcon) ? (
          <ButtonIcon
            className={classes.endIcon}
            icon={endIcon}
            onClick={onClickEndIcon}
          />
        ) : null}
      </div>
    );
  }
);
