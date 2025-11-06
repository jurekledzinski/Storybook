import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@src/stories/buttons/icon-button';
import { modalHeaderClassNames } from '../../utils';
import { ModalHeaderProps } from './types';

export const ModalHeader = ({ color, onClose, title, variant }: ModalHeaderProps) => {
  const classNames = modalHeaderClassNames({ color, variant });

  return (
    <header className={classNames.header}>
      <h3 className={classNames.title}>{title}</h3>
      <IconButton
        icon={[faXmark]}
        color={color}
        onClick={onClose}
        size="size-xxs"
        variant="contained"
      />
    </header>
  );
};
