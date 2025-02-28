import { modalHeaderClassNames } from '../../utils/classNames';
import { ModalHeaderProps } from './types';

export const ModalHeader = ({ title, variant }: ModalHeaderProps) => {
  const classes = modalHeaderClassNames(variant);

  return (
    <header className={classes.header}>
      <h5 className={classes.title}>{title}</h5>
    </header>
  );
};
