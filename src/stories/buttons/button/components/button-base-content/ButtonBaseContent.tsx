import styles from '../../styles/Button.module.css';
import { ButtonBaseContentProps } from './types';
import { Icon } from '@src/stories/graphics/icon';
import { Loader } from '@src/stories/feedbacks/loader';

export const ButtonBaseContent = ({
  isLoading,
  iconEnd,
  iconStart,
  size,
  label,
}: ButtonBaseContentProps) => {
  return (
    <>
      {isLoading && iconStart && !iconEnd ? (
        <span className={styles.iconStart}>
          <Loader sizeSchema={size} />
        </span>
      ) : (
        iconStart && (
          <span className={styles.iconStart}>
            <Icon icon={iconStart[0]} size="1x" />
          </span>
        )
      )}

      {isLoading && !iconStart && !iconEnd ? (
        <>
          <span className={styles.iconCenter}>
            <Loader sizeSchema={size} />
          </span>
          <span className={styles.label}>{label}</span>
        </>
      ) : (
        <span className={styles.label}>{label}</span>
      )}

      {isLoading && iconEnd ? (
        <span className={styles.iconEnd}>
          <Loader sizeSchema={size} />
        </span>
      ) : (
        iconEnd && (
          <span className={styles.iconEnd}>
            <Icon icon={iconEnd[0]} size="1x" />
          </span>
        )
      )}
    </>
  );
};
