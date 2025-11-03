import { MouseEvent } from 'react';
import { usePopOver } from '@src/stories/overlays/pop-over';
import { useSelect } from '../store';

export const useSelectTrigger = (id: string = 'root') => {
  const { open, onToggle, setTrigger } = usePopOver();
  const { onSetValue, value } = useSelect();

  const handleClick = () => onToggle(id);
  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onSetValue(e.currentTarget.id);
  };
  const handleRef = (node: HTMLElement | null) => setTrigger(node, id);
  const isOpen = open[id] || false;

  return { isOpen, handleClick, handleDelete, handleRef, value };
};
