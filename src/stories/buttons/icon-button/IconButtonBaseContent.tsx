import styles from './IconButton.module.css';
import { Icon } from '../../graphics/icon/Icon';
import { IconButtonBaseContentProps } from './types';
import { Loader } from '../../feedbacks/loader/Loader';

const sizesSchema = {
  small: 16,
  medium: 16,
  large: 18,
};

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
            <Icon
              icon={icon}
              size={sizesSchema[size as keyof typeof sizesSchema]}
            />
          </span>
        </>
      ) : (
        <span className={styles.icon}>
          {icon ? (
            <Icon
              icon={icon}
              size={sizesSchema[size as keyof typeof sizesSchema]}
            />
          ) : null}
        </span>
      )}
    </>
  );
};
