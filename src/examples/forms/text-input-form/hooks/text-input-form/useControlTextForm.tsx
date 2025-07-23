import { useForm } from 'react-hook-form';
import { InputsTextInput } from './types';

const defaultValues = {
  area: '',
  price: '',
  rooms: '',
  year: '',
};

export const useControlTextForm = () => {
  const formSettings = useForm<InputsTextInput>({
    defaultValues,
  });

  return formSettings;
};
