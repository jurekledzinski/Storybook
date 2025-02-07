import styles from './Modal.module.css';
import { Backdrop } from '../backdrop/Backdrop';
import { classNames } from '../../helpers/classNames';
import { CSSTransition } from 'react-transition-group';
import { ModalProps } from './types';
import { useCloseModalOnSuccess } from './useCloseModalOnSuccess';
import { useRef, useState } from 'react';
import { XSquare } from '@phosphor-icons/react';

const cssTranstionStyles = {
  enter: styles.modalEnter,
  enterActive: styles.modalEnterActive,
  exit: styles.modalExit,
  exitActive: styles.modalExitActive,
};

export const Modal = ({
  cancel = 'Cancel',
  confirm = 'Confirm',
  customStyle,
  children,
  isCancel = true,
  isClose = true,
  isPending,
  isSuccess,
  isOpen,
  onClose,
  onConfirm,
  onSuccess,
  typeConfirm,
  title,
}: ModalProps) => {
  const nodeRef = useRef(null);
  const [showBackdrop, setShowBackdrop] = useState(false);

  useCloseModalOnSuccess({
    isPending,
    isSuccess,
    onSuccess,
    isOpen,
  });

  return (
    <>
      <Backdrop open={showBackdrop} />
      <CSSTransition
        in={isOpen}
        nodeRef={nodeRef}
        timeout={300}
        classNames={cssTranstionStyles}
        unmountOnExit
        onEnter={() => setShowBackdrop(true)}
        onExited={() => setShowBackdrop(false)}
      >
        <div
          className={classNames(
            styles.modalElement,
            customStyle?.modalElement ?? ''
          )}
          ref={nodeRef}
        >
          <header
            className={classNames(styles.header, customStyle?.header ?? '')}
          >
            <h5 className={classNames(styles.title, customStyle?.title ?? '')}>
              {title}
            </h5>

            {isClose && (
              <button
                className={classNames(
                  styles.buttonClose,
                  customStyle?.buttonClose ?? ''
                )}
                onClick={onClose}
              >
                <XSquare
                  className={classNames(
                    styles.iconClose,
                    customStyle?.iconClose ?? ''
                  )}
                  size={24}
                  weight="fill"
                  color="white"
                />
              </button>
            )}
          </header>

          <div className={classNames(styles.body, customStyle?.body ?? '')}>
            {children}
          </div>

          <footer
            className={classNames(styles.footer, customStyle?.footer ?? '')}
          >
            {isCancel && <button onClick={onClose}>{cancel}</button>}

            <button type={typeConfirm} onClick={onConfirm}>
              {confirm}
            </button>
          </footer>
        </div>
      </CSSTransition>
    </>
  );
};
