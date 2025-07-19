import styles from './DropFileForm.module.css';
import { checkIsError } from '../utils';
import { Field } from '@src/stories/form-elements/field';
import { Input } from '@src/stories/form-elements/input';
import { InputsDropFileForm } from './types';
import { Label } from '@src/stories/form-elements/label';
import { Message } from '@src/stories/feedbacks/message';
import { PasswordInput } from '@src/stories/form-elements/password-input';
import { SubmitHandler, useForm } from 'react-hook-form';

export const DropFileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<InputsDropFileForm>({ defaultValues: { files: [], name: '' } });

  const onSubmit: SubmitHandler<InputsDropFileForm> = (data) => {
    console.log('Submit', data);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Field>
          <Label>Name:</Label>
          <Input
            isError={checkIsError('name', errors, isDirty)}
            {...register('name', {
              required: { message: 'Name is required', value: true },
            })}
          />
          <Message variant="error">{errors.name?.message}</Message>
        </Field>
        <Field>
          <Label>Email:</Label>
          <Input
            isError={checkIsError('email', errors, isDirty)}
            {...register('email', {
              required: { message: 'Email is required', value: true },
            })}
          />
          <Message variant="error">{errors.email?.message}</Message>
        </Field>
        <Field>
          <Label>Password:</Label>
          <PasswordInput
            isError={checkIsError('password', errors, isDirty)}
            {...register('password', {
              required: { message: 'Password is required', value: true },
            })}
          />
          <Message variant="error">{errors.password?.message}</Message>
        </Field>
        <Field>
          <Label>Confirm password:</Label>
          <PasswordInput
            isError={checkIsError('confirmPassword', errors, isDirty)}
            {...register('confirmPassword', {
              required: {
                message: 'Confirm password is required',
                value: true,
              },
            })}
          />
          <Message variant="error">{errors.confirmPassword?.message}</Message>
        </Field>
      </form>
    </div>
  );
};
