import { MouseEventHandler } from 'react';

export type ModalProps = {
  cancel?: string;
  customStyle?: Partial<{
    body: string;
    buttonCancel: string;
    buttonClose: string;
    buttonConfirm: string;
    footer: string;
    iconClose: string;
    header: string;
    modalElement: string;
    title: string;
  }>;
  confirm?: string;
  children?: React.ReactNode;
  isClose?: boolean;
  isCancel?: boolean;
  isPending?: boolean;
  isSuccess?: boolean;
  isOpen?: boolean;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  onConfirm?: MouseEventHandler<HTMLButtonElement>;
  onSuccess?: () => void;
  typeConfirm?: 'button' | 'submit' | 'reset';
  title: string;
};

export type UseControlModalProps = {
  isOpen?: boolean;
  isPending?: boolean;
  isSuccess?: boolean;
  onSuccess?: () => void;
};
