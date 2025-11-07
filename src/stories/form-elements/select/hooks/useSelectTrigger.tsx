import { MouseEvent } from 'react';
import { usePopover } from '@src/stories/overlays/pop-over';
import { useSelect } from '../store';

export const useSelectTrigger = () => {
  const { open, onToggle, setTrigger } = usePopover();
  const { onSetValue, value } = useSelect();

  const handleClick = () => onToggle();
  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (onSetValue) onSetValue(e.currentTarget.id);
  };
  const handleRef = (node: HTMLElement | null) => setTrigger(node);

  return { isOpen: open, handleClick, handleDelete, handleRef, value };
};
