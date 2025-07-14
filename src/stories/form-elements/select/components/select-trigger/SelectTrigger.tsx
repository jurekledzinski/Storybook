import { capitalizeFirstLetter } from '@src/stories/helpers';
import { SelectTriggerProps } from './types';
import { usePopOver } from '@src/stories/overlays/pop-over';
import { useSelect } from '../../store';
import {
  getClassNamesInput,
  InputWrapper,
} from '@src/stories/form-elements/input';

export const SelectTrigger = ({ endIcon }: SelectTriggerProps) => {
  const { onToggle, open, registerTriggerRef } = usePopOver();
  const { isError, label, size, value, variant } = useSelect();

  const classes = getClassNamesInput({ variant, size, isError });

  return (
    <InputWrapper
      endIcon={open['root'] ? endIcon[0] : endIcon[1]}
      isError={isError}
      onClickEndIcon={() => onToggle('root')}
      ref={(node) => registerTriggerRef(node, 'root')}
      size={size}
      variant={variant}
      divider={true}
    >
      <fieldset className={classes.fieldset} onClick={() => onToggle('root')}>
        <input
          className={classes.input}
          type="text"
          readOnly={true}
          value={capitalizeFirstLetter(value)}
        />
        {variant !== 'basic' && (
          <legend className={classes.legend}>{label}</legend>
        )}
      </fieldset>
    </InputWrapper>
  );
};
