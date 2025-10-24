import { AccordionSelectProps } from './types';
import { Checkbox } from '@src/stories/form-elements/checkbox';
import { useAccordion } from '../../store';

export const AccordionSelect = ({ onSelect, size }: AccordionSelectProps) => {
  const context = useAccordion();

  return (
    <Checkbox
      data-id={context.id}
      name="delete"
      color="negative"
      size={size}
      variant="unfilled"
      onChange={onSelect}
    />
  );
};
