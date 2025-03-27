import { MouseEvent, useRef } from 'react';
import { useSelect } from '../../context/useSelect';
import { SelectDisplayWrapper } from './components/SelectDisplayWrapper';
import { SelectDisplayProps } from './types';
import { getClassNamesInput } from '../../../input/utils/classNames';
import { useCloseOnClickOutside } from '../../../../hooks/useCloseOnClickOutside';

export const SelectDisplay = ({ endIcon }: SelectDisplayProps) => {
  const fieldsetRef = useRef<HTMLFieldSetElement>(null);
  const { label, variant, value, onOpen, size, isError } = useSelect();

  useCloseOnClickOutside({
    onClick: () => onOpen && onOpen(),
    ref: fieldsetRef,
  });

  const classes = getClassNamesInput(variant, size, isError);

  const onClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (onOpen) onOpen();
  };

  return (
    <SelectDisplayWrapper endIcon={endIcon} onClickEndIcon={onClick}>
      <fieldset
        ref={fieldsetRef}
        className={classes.fieldset}
        onClick={onClick}
      >
        <input
          className={classes.input}
          type="text"
          readOnly={true}
          value={value}
        />
        {variant !== 'basic' && (
          <legend className={classes.legend}>{label}</legend>
        )}
      </fieldset>
    </SelectDisplayWrapper>
  );
};
