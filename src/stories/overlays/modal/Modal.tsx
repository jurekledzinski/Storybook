import { Backdrop } from '../backdrop';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { modalClassNames } from './utils';
import { ModalProps } from './types';
import { useCheckMount } from '@src/stories/hooks';
import { useRef, useState } from 'react';

export const Modal = ({ children, open = false, portal }: ModalProps) => {
  const nodeRef = useRef(null);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const mounted = useCheckMount();

  const classNames = modalClassNames();

  const modalElement = (
    <CSSTransition
      in={open}
      nodeRef={nodeRef}
      timeout={300}
      classNames={classNames.modal}
      unmountOnExit
      onEnter={() => setShowBackdrop(true)}
      onExited={() => setShowBackdrop(false)}
    >
      <div className={classNames.modalElement} ref={nodeRef}>
        {children}
      </div>
    </CSSTransition>
  );

  if (!mounted) return null;

  if (portal) {
    return (
      <>
        <Backdrop open={showBackdrop} portal={portal} zIndex={200} />
        {createPortal(modalElement, document.body)}
      </>
    );
  }

  return (
    <>
      <Backdrop open={showBackdrop} portal={portal} zIndex={200} />
      {modalElement}
    </>
  );
};
