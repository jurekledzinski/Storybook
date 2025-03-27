import styles from './styles/Button.module.css';
import { ButtonBaseContentProps } from './types';
import { Icon } from '../../graphics/icon/Icon';
import { Loader } from '../../feedbacks/loader/Loader';

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
            <Icon icon={iconStart} size="1x" />
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
            <Icon icon={iconEnd} size="1x" />
          </span>
        )
      )}
    </>
  );
};
