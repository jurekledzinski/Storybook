import styles from './styles/IconButton.module.css';
import { Icon } from '../../graphics/icon/Icon';
import { IconButtonBaseContentProps } from './types';
import { Loader } from '../../feedbacks/loader/Loader';

export const IconButtonBaseContent = ({
  icon,
  isLoading,
  size,
}: IconButtonBaseContentProps) => {
  return (
    <>
      {isLoading ? (
        <>
          <span className={styles.iconCenter}>
            <Loader sizeSchema={size} />
          </span>
          <span className={styles.icon}>
            <Icon icon={icon} size="1x" />
          </span>
        </>
      ) : (
        <span className={styles.icon}>
          {icon ? <Icon icon={icon} size="1x" /> : null}
        </span>
      )}
    </>
  );
};
