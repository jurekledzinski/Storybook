import styles from './Button.module.css';
import { ButtonProps } from './types';
import { classNames } from '../../helpers/classNames';
import { Icon } from '../../graphics/icon/Icon';
import { Loader } from '../../feedbacks/loader/Loader';

// outline color icons jak primary to primary color ikon

export const Button = ({
  border,
  color,
  disabled,
  fullWidth,
  isLoading,
  radius,
  size,
  variant,
  iconStart,
  iconEnd,
  onClick,
}: ButtonProps) => {
  const buttonClassNames = classNames(
    styles.button,
    styles[color as keyof typeof styles],
    styles[size as keyof typeof styles],
    styles[variant as keyof typeof styles],
    styles[radius as keyof typeof styles],
    styles[border as keyof typeof styles]
  );

  return (
    <button
      className={
        fullWidth
          ? classNames(buttonClassNames, styles.fullWidth)
          : classNames(buttonClassNames)
      }
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading && iconStart && !iconEnd ? (
        <span className={styles.iconStart}>
          <Loader sizeSchema={size} />
        </span>
      ) : (
        iconStart && (
          <span className={styles.iconStart}>
            <Icon icon={iconStart} schemaSize={size} />
          </span>
        )
      )}

      {isLoading && !iconStart && !iconEnd ? (
        <>
          <span className={styles.iconCenter}>
            <Loader sizeSchema={size} />
          </span>
          <span className={styles.text}>Click button</span>
        </>
      ) : (
        <span className={styles.text}>Click button</span>
      )}

      {isLoading && iconEnd ? (
        <span className={styles.iconEnd}>
          <Loader sizeSchema={size} />
        </span>
      ) : (
        iconEnd && (
          <span className={styles.iconEnd}>
            <Icon icon={iconEnd} schemaSize={size} />
          </span>
        )
      )}
    </button>
  );
};
