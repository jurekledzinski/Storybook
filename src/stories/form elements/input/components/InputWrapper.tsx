import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import { getClassNamesInputWrapper } from '../utils/classNames';
import { Icon } from '../../../graphics/icon/Icon';
import { InputWrapperIconsRef } from './types';
import { InputWrapperProps } from '../types';
import { Loader } from '../../../feedbacks/loader/Loader';
import {
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

export const InputWrapper = forwardRef<InputWrapperIconsRef, InputWrapperProps>(
  (
    {
      toggleIcon,
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
      isPending
    );

    return (
      <div className={classes.inputWrapper}>
        {startIcon && (
          <button
            ref={startIconRef}
            className={classes.startIcon}
            onClick={onClickStartIcon}
          >
            <Icon icon={startIcon} size="1x" />
          </button>
        )}

        {children}

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

        {isPending ? (
          <span className={classes.endIcon}>
            <Loader sizeSchema={`inner-${size!}`} />
          </span>
        ) : (endIcon && isError === undefined) ||
          (toggleIcon && endIcon && isError !== undefined) ? (
          <button
            ref={endIconRef}
            className={classes.endIcon}
            tabIndex={0}
            onClick={onClickEndIcon}
          >
            <Icon icon={endIcon} size="1x" />
          </button>
        ) : null}
      </div>
    );
  }
);
