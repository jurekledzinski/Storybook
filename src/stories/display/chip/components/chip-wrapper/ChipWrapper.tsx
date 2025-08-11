import { ChipWrapperProps } from './types';
import { DeleteButton } from '../delete-button';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { getClassNamesChip } from '../../utils';
import { Icon } from '@src/stories/graphics/icon';
import { StartIcon } from '../start-icon';

export const ChipWrapper = ({
  children,
  onDelete,
  deleteIcon = faXmark,
  startIcon,
  startIconSrc,
  ...props
}: ChipWrapperProps) => {
  const classes = getClassNamesChip(props);

  return (
    <div {...props} className={classes.chipWrapper} tabIndex={0}>
      <StartIcon startIcon={startIcon} startIconSrc={startIconSrc} />

      {children && <span className={classes.label}>{children}</span>}

      {onDelete ? (
        <DeleteButton
          className={classes.delete}
          id={props.id}
          onDelete={onDelete}
        >
          <Icon icon={deleteIcon} />
        </DeleteButton>
      ) : null}
    </div>
  );
};
