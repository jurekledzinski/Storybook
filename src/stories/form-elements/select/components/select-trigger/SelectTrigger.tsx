import { capitalizeFirstLetter } from '@src/stories/helpers';
import { Events, SelectTriggerProps } from './types';
import { KeyboardEvent } from 'react';
import { useAriaAttributes } from '@src/stories/hooks';
import { usePopOver } from '@src/stories/overlays/pop-over';
import { useSelect } from '../../store';
import {
  getClassNamesInput,
  InputWrapper,
} from '@src/stories/form-elements/input';

export const SelectTrigger = ({ endIcon }: SelectTriggerProps) => {
  const { onToggle, open, registerTriggerRef } = usePopOver();
  const { isError, label, size, value, variant } = useSelect();

  const isOpen = open['root'];
  const a11y = useAriaAttributes().selectTriggerA11y(isOpen, `Choose ${label}`);
  const classes = getClassNamesInput({ variant, size, isError });

  const handleToggle = (e: Events) => {
    e.preventDefault();
    if (onToggle) onToggle('root');
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleToggle(e);
  };

  return (
    <InputWrapper
      endIcon={isOpen ? endIcon[0] : endIcon[1]}
      isError={isError}
      onClickEndIcon={handleToggle}
      ref={(node) => registerTriggerRef(node, 'root')}
      size={size}
      variant={variant}
      divider={true}
      {...a11y}
    >
      <fieldset className={classes.fieldset} onClick={handleToggle}>
        <input
          className={classes.input}
          type="text"
          readOnly
          value={capitalizeFirstLetter(value)}
          onKeyDown={onKeyDown}
        />
        {variant !== 'basic' && (
          <legend className={classes.legend}>{label}</legend>
        )}
      </fieldset>
    </InputWrapper>
  );
};
