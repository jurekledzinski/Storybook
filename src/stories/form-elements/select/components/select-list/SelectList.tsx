import { SelectListProps } from './types';
import { useAriaAttributes } from '@src/stories/hooks';

export const SelectList = ({ children }: SelectListProps) => {
  const { selectListA11y } = useAriaAttributes();

  return <div {...selectListA11y()}>{children}</div>;
};
