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
  size,
  onClickEndIcon,
  onClickStartIcon,
  variant,
}: InputIconsProps) => {
  const loaderClassNames = classNames(
    styles.loader,
    styles[variant as keyof typeof styles],
    styles[size! as keyof typeof styles]
  );

  const iconClassNames = classNames(
    styles.icon,
    styles[variant as keyof typeof styles]
  );

  const startIconClassNames = classNames(
    iconClassNames,
    styles.startIcon,
    styles[size! as keyof typeof styles]
  );
  const endIconClassNames = classNames(
    iconClassNames,
    styles.endIcon,
    styles[size! as keyof typeof styles]
  );
  const invalidIconClassNames = classNames(endIconClassNames, styles.invalid);
  const validIconClassNames = classNames(endIconClassNames, styles.valid);

  return (
    <>
      {isPending ? (
        <span className={loaderClassNames}>
          <Loader sizeSchema="small" />
        </span>
      ) : endIcon && isError === undefined ? (
        <span className={endIconClassNames} onClick={onClickEndIcon}>
          {endIcon}
        </span>
      ) : null}

      {startIcon ? (
        <span className={startIconClassNames} onClick={onClickStartIcon}>
          {startIcon}
        </span>
      ) : null}

      {isError !== undefined && !isPending ? (
        isError ? (
          <span className={invalidIconClassNames}>
            <Warning size={16} weight="bold" />
          </span>
        ) : (
          <span className={validIconClassNames}>
            <Check size={16} weight="bold" />
          </span>
        )
      ) : null}
    </>
  );
};
