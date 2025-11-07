import { MenuTriggerProps } from './types';
import { useMenuTrigger } from '../../hooks';

export const MenuTrigger = ({ children }: MenuTriggerProps) => {
  const menuChildren = useMenuTrigger({ children });

  return <>{menuChildren}</>;
};
