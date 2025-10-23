import { AccordionActionsProps } from './types';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@src/stories/buttons/icon-button';
import { useAccordion } from '../../store';

export const AccordionActions = ({ onDelete }: AccordionActionsProps) => {
  const context = useAccordion();

  return (
    <>
      {onDelete && (
        <IconButton
          data-id={context.id}
          icon={[faTrash]}
          name="delete"
          color="negative"
          variant="minimal"
          onClick={onDelete}
          type="button"
        />
      )}
    </>
  );
};
