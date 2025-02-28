import stylesBody from '../components/modal-body/ModalBody.module.css';
import stylesFooter from '../components/modal-footer/ModalFooter.module.css';
import stylesHeader from '../components/modal-header/ModalHeader.module.css';
import stylesModal from '../Modal.module.css';
import { classNames } from '../../../helpers/classNames';
import { Variant } from '../components/modal-header/types';

export const modalClassNames = () => ({
  modal: stylesModal,
  modalElement: stylesModal.modalElement,
});

export const modalHeaderClassNames = (variant: Variant = 'primary') => ({
  header: classNames(stylesHeader.header, stylesHeader[variant]),
  title: classNames(stylesHeader.title, stylesHeader[variant]),
  buttonClose: stylesHeader.buttonClose,
  iconClose: stylesHeader.iconClose,
});

export const modalBodyClassNames = () => ({
  body: stylesBody.body,
});

export const modalFooterClassNames = () => ({
  footer: stylesFooter.footer,
});
