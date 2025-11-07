import { Backdrop } from '../backdrop';
import { createPortal } from 'react-dom';
import { modalClassNames } from './utils';
import { ModalProps } from './types';
import { Popover } from '../pop-over';
import { useCheckMount } from '@src/stories/hooks';
import { useState } from 'react';

export const Modal = ({ children, open = false, portal }: ModalProps) => {
  const [showBackdrop, setShowBackdrop] = useState(false);

  const mounted = useCheckMount();

  const classNames = modalClassNames();

  const modalElement = (
    <Popover
      open={open}
      timeout={300}
      className={classNames.modalElement}
      classNames={classNames.modal}
      onEnter={() => setShowBackdrop(true)}
      onExited={() => setShowBackdrop(false)}
    >
      {children}
    </Popover>
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
