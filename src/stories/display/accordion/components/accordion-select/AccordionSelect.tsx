import { useAccordion } from '../../store';
import { AccordionSelectProps } from './types';
import { Checkbox } from '@src/stories/form-elements/checkbox';

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
