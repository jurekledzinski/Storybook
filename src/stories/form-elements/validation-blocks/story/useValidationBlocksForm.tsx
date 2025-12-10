import { InputsValidateBlocksForm } from './rules';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';

export const useValidationBlocksForm = () => {
  const form = useForm<InputsValidateBlocksForm>({
    defaultValues: { confirm: '', password: '' },
    mode: 'all',
  });

  const onSubmit: SubmitHandler<InputsValidateBlocksForm> = (data) => {
    console.log('Submit', data);
  };

  const password = form.watch('password');

  useEffect(() => {
    if (password) form.trigger('confirm');
  }, [form, password]);

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};
