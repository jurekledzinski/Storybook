import { ButtonIcon } from '../button-icon/ButtonIcon';
import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import { getClassNamesInputWrapper } from '../../utils/classNames';
import { InputWrapperIconsRef } from './types';
import { InputWrapperProps } from '../../types';
import { LoaderIcon } from '../loader-icon/LoaderIcon';
import { StatusIcon } from '../status-icon/StatusIcon';
import {
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

export const InputWrapper = forwardRef<InputWrapperIconsRef, InputWrapperProps>(
  (
    {
      divider,
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
    },
    ref: Ref<InputWrapperIconsRef>
  ) => {
    const startIconRef = useRef<HTMLButtonElement>(null);
    const endIconRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => ({
      startIcon: startIconRef,
      endIcon: endIconRef,
    }));

    const classes = getClassNamesInputWrapper(
      variant,
      size,
      isError,
      disabled,
      readOnly,
      startIcon,
      endIcon,
      isPending,
      divider
    );

    return (
      <div className={classes.inputWrapper}>
        {startIcon && (
          <ButtonIcon
            className={classes.startIcon}
            icon={startIcon}
            ref={startIconRef}
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
            ref={endIconRef}
            onClick={onClickEndIcon}
          />
        ) : null}
      </div>
    );
  }
);
