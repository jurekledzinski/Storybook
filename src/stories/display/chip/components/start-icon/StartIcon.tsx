import { StartIconProps } from './types';
import styles from '../../Chip.module.css';
import { Icon } from '@src/stories/graphics/icon';

export const StartIcon = ({ startIcon, startIconSrc }: StartIconProps) => {
  if (startIcon) {
    return (
      <span className={styles.iconStart}>
        <Icon icon={startIcon} />
      </span>
    );
  }

  if (startIconSrc) {
    return <img className={styles.image} src={startIconSrc} alt="Chip image" />;
  }

  return null;
};
