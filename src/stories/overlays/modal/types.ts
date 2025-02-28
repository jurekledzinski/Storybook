import { ModalHeaderProps } from './components/modal-header/types';
import { ModalFooterProps } from './components/modal-footer/types';

export type UseControlModalProps = Partial<{
  isOpen: boolean;
  isPending: boolean;
  isSuccess: boolean;
  onSuccess: () => void;
}>;

export interface ModalProps
  extends ModalHeaderProps,
    ModalFooterProps,
    UseControlModalProps {
  children: React.ReactNode;
}
