import styles from './styles/IconButton.module.css';
import { Icon } from '@src/stories/graphics/icon';
import { IconButtonContentProps } from './types';
import { Loader } from '@src/stories/feedbacks/loader';

export const IconButtonContent = ({
  icon,
  isLoading,
  size,
}: IconButtonContentProps) => {
  return (
    <>
      {isLoading ? (
        <>
          <span className={styles.iconCenter}>
            <Loader sizeSchema={size} />
          </span>
          <span className={styles.icon}>
            <Icon icon={icon[0]} size="1x" />
          </span>
        </>
      ) : (
        <span className={styles.icon}>
          {icon ? <Icon icon={icon[0]} size="1x" /> : null}
        </span>
      )}
    </>
  );
};
