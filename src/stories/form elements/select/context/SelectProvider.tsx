import { ContextSelect } from './context';
import { Option } from '../types';
import { SelectProviderProps } from './types';
import { useState } from 'react';

const SelectProvider = <T extends Option>({
  children,
  value,
}: SelectProviderProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen((prev) => !prev);

  return (
    <ContextSelect.Provider value={{ ...value, isOpen, onOpen }}>
      {children}
    </ContextSelect.Provider>
  );
};

export default SelectProvider;
