import { ContextPopOver } from './context';
import { Option } from '../types';
import { PopOverProviderProps } from './types';
import { useState } from 'react';

const PopOverProvider = <T extends Option>({
  children,
  value,
}: PopOverProviderProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = (value: boolean) =>
    setIsOpen((prev) => (value ? !prev : false));

  return (
    <ContextPopOver.Provider value={{ ...value, isOpen, onOpen }}>
      {children}
    </ContextPopOver.Provider>
  );
};

export default PopOverProvider;
