import { chipClassNames } from '../../utils';
import { ChipWrapperProps } from './types';
import { DeleteButton } from '../delete-button';
import { Icon } from '@src/stories/graphics/icon';
import { StartIcon } from '../start-icon';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const ChipWrapper = ({
  children,
  onDelete,
  deleteIcon = faXmark,
  startIcon,
  startIconSrc,
  ...props
}: ChipWrapperProps) => {
  const classNames = chipClassNames(props);

  return (
    <div {...props} className={classNames.chipWrapper} tabIndex={0}>
      <StartIcon startIcon={startIcon} startIconSrc={startIconSrc} />

      {children && <span className={classNames.label}>{children}</span>}

      {onDelete && deleteIcon ? (
        <DeleteButton className={classNames.delete} id={props.id} onDelete={onDelete}>
          <Icon icon={deleteIcon} />
        </DeleteButton>
      ) : null}
    </div>
  );
};
