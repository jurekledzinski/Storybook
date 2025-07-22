import { capitalizeFirstLetter } from '@src/stories/helpers';
import { MouseEvent } from 'react';
import { SelectTriggerProps } from './types';
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

  const onClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (onToggle) onToggle('root');
  };

  return (
    <InputWrapper
      endIcon={isOpen ? endIcon[0] : endIcon[1]}
      isError={isError}
      onClickEndIcon={onClick}
      ref={(node) => registerTriggerRef(node, 'root')}
      size={size}
      variant={variant}
      divider={true}
      {...a11y}
    >
      <fieldset className={classes.fieldset} onClick={onClick}>
        <input
          className={classes.input}
          type="text"
          readOnly={true}
          value={capitalizeFirstLetter(value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onToggle('root');
            }
          }}
        />
        {variant !== 'basic' && (
          <legend className={classes.legend}>{label}</legend>
        )}
      </fieldset>
    </InputWrapper>
  );
};
