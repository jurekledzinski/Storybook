import styles from '../../Select.module.css';
import { PopOver } from '@src/stories/overlays/pop-over';
import { SelectListProps } from './types';
import { useSelectList } from '../../hooks';

export const SelectList = ({ children }: SelectListProps) => {
  const { onEntering, open, panelRef } = useSelectList();

  return (
    <PopOver ref={panelRef} open={open} onEntering={onEntering}>
      <ul className={styles.list}>{children}</ul>
    </PopOver>
  );
};
