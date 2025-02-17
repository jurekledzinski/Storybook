import styles from './InputIcons.module.css';
import { Check, Warning } from '@phosphor-icons/react';
import { classNames } from '../../helpers/classNames';
import { InputIconsProps } from './types';
import { Loader } from '../../feedbacks/loader/Loader';

export const InputIcons = ({
  endIcon,
  isError,
  isPending,
  startIcon,
  onClick,
  variant,
}: InputIconsProps) => {
  const loaderClassNames = classNames(
    styles.loader,
    styles[variant as keyof typeof styles]
  );

  const iconClassNames = classNames(
    styles.icon,
    styles[variant as keyof typeof styles]
  );

  return (
    <>
      {isPending ? (
        <span className={loaderClassNames}>
          <Loader sizeSchema="small" />
        </span>
      ) : endIcon ? (
        <span
          className={classNames(iconClassNames, styles.endIcon)}
          onClick={onClick}
        >
          {endIcon}
        </span>
      ) : null}

      {startIcon ? (
        <span className={classNames(iconClassNames, styles.startIcon)}>
          {startIcon}
        </span>
      ) : null}

      {isError !== undefined ? (
        isError ? (
          <span
            className={classNames(
              iconClassNames,
              styles.endIcon,
              styles.invalid
            )}
            onClick={onClick}
          >
            <Warning size={16} weight="bold" />
          </span>
        ) : (
          <span
            className={classNames(iconClassNames, styles.endIcon, styles.valid)}
            onClick={onClick}
          >
            <Check size={16} weight="bold" />
          </span>
        )
      ) : null}
    </>
  );
};
