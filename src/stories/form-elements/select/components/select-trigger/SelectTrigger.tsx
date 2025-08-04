import { capitalizeFirstLetter } from '@src/stories/helpers';
import { SelectTriggerProps } from './types';
import { useAriaAttributes } from '@src/stories/hooks';
import { usePopOver } from '@src/stories/overlays/pop-over';
import { useSelect } from '../../store';
import { useTriggerEvents } from './hooks/trigger-events';
import {
  getClassNamesInput,
  InputWrapper,
} from '@src/stories/form-elements/input';

export const SelectTrigger = ({ endIcon, ...props }: SelectTriggerProps) => {
  const { onToggle, open, registerTriggerRef } = usePopOver();
  const { isError, label, size, value, variant } = useSelect();
  const { onClick, onKeyDown } = useTriggerEvents({ onToggle });

  const isOpen = open['root'];
  const a11y = useAriaAttributes().selectTriggerA11y(isOpen, `Choose ${label}`);
  const classes = getClassNamesInput({ variant, size, isError });

  return (
    <InputWrapper
      divider={true}
      endIcon={isOpen ? endIcon[0] : endIcon[1]}
      isError={isError}
      onClickEndIcon={onClick}
      ref={(node) => registerTriggerRef(node, 'root')}
      size={size}
      variant={variant}
      {...(isOpen && { className: 'focused' })}
      {...a11y}
    >
      <fieldset className={classes.fieldset} onClick={onClick}>
        <input
          {...props}
          className={classes.input}
          readOnly
          value={capitalizeFirstLetter(value)}
          onKeyDown={onKeyDown}
          tabIndex={-1}
        />
        {variant !== 'basic' && (
          <legend className={classes.legend}>{label}</legend>
        )}
      </fieldset>
    </InputWrapper>
  );
};
