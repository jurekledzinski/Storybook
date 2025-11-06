import styles from './PopOver.module.css';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { PopOverProps } from './types';

export const PopOver = forwardRef<HTMLDivElement, PopOverProps>(
  (
    {
      children,
      className,
      classNames,
      open,
      mountOnEnter,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      timeout = 300,
      unmountOnExit = true,
      ...props
    },
    ref
  ) => {
    const nodeRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => nodeRef.current!);

    return createPortal(
      <CSSTransition
        in={open}
        nodeRef={nodeRef}
        timeout={timeout}
        classNames={classNames ?? styles}
        unmountOnExit={unmountOnExit}
        onEnter={onEnter}
        onEntered={onEntered}
        onEntering={onEntering}
        onExit={onExit}
        onExited={onExited}
        onExiting={onExiting}
        mountOnEnter={mountOnEnter}
      >
        <div {...props} className={className ?? styles.popOver} ref={nodeRef}>
          {children}
        </div>
      </CSSTransition>,
      document.body
    );
  }
);

PopOver.displayName = 'PopOver';
