import styles from './RegisterForm.module.css';
import { checkIsError } from '../utils';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { InputsRegisterForm } from './types';
import { SubmitHandler, useForm, Validate } from 'react-hook-form';
import {
  Button,
  ButtonGroup,
  Field,
  Input,
  Label,
  Message,
  PasswordInput,
  ValidationChecklist,
  useValidateCheckList,
  ValidationItem,
} from '@src/stories';

const mapRules: Record<string, Validate<string, InputsRegisterForm>> = {
  minLength: (v) => v.length >= 8 || '',
  hasNumber: (v) => /\d/.test(v) || '',
  hasUppercase: (v) => /[A-Z]/.test(v) || '',
  hasLowercase: (v) => /[a-z]/.test(v) || '',
  hasSpecial: (v) => /[@#!]/.test(v) || '',
  hasNoSpace: (v) => /^\S*$/.test(v) || '',
};

const confirmRules: Record<string, Validate<string, InputsRegisterForm>> = {
  sameValues: (_, rest) => rest.password === rest.confirm,
};

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    watch,
  } = useForm<InputsRegisterForm>({
    defaultValues: {
      name: '',
      confirm: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<InputsRegisterForm> = (data) => {
    console.log('Submit', data);
  };

  const { ruleResults: rulePassword, validate: validatePassword } = useValidateCheckList({
    mapRules,
    value: watch('password'),
    formValues: watch(),
  });

  const { ruleResults: ruleConfirm, validate: validateConfirm } = useValidateCheckList({
    mapRules: confirmRules,
    value: watch('confirm'),
    formValues: watch(),
  });

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Field>
          <Label>Name:</Label>
          <Input
            isError={checkIsError('name', errors, Boolean(dirtyFields.name))}
            {...register('name', {
              required: { message: 'Name is required', value: true },
            })}
          />
          <Message color="negative">{errors.name?.message}</Message>
        </Field>

        <Field>
          <Label>Email:</Label>
          <Input
            isError={checkIsError('email', errors, Boolean(dirtyFields.email))}
            {...register('email', {
              required: { message: 'Email is required', value: true },
              validate: {
                matchPattern: (v) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  'Email address must be a valid address',
              },
            })}
          />
          <Message color="negative">{errors.email?.message}</Message>
        </Field>

        <Field>
          <Label>Password:</Label>
          <PasswordInput
            endIcon={[faEye, faEyeSlash]}
            isError={checkIsError('password', errors, Boolean(dirtyFields.password))}
            {...register('password', {
              required: { message: 'Password is required', value: true },
              validate: validatePassword,
            })}
          />
          <Message color="negative">{errors.password?.message}</Message>
        </Field>

        <Field>
          <Label>Confirm password:</Label>
          <PasswordInput
            endIcon={[faEye, faEyeSlash]}
            isError={checkIsError('confirm', errors, Boolean(dirtyFields.confirm))}
            {...register('confirm', {
              required: {
                message: 'Confirm password is required',
                value: true,
              },
              validate: validateConfirm,
            })}
          />
          <Message color="negative">{errors.confirm?.message}</Message>
        </Field>

        <ValidationChecklist style={{ marginTop: 8 }}>
          <ValidationItem id="min" isValid={rulePassword['minLength']}>
            Password must be at least 8 characters
          </ValidationItem>
          <ValidationItem id="uppecase" isValid={rulePassword['hasUppercase']}>
            Must include at least one uppercase letter
          </ValidationItem>
          <ValidationItem id="lowercase" isValid={rulePassword['hasLowercase']}>
            Must include at least one lowercase letter
          </ValidationItem>
          <ValidationItem id="number" isValid={rulePassword['hasNumber']}>
            Must include at least one number
          </ValidationItem>
          <ValidationItem id="special" isValid={rulePassword['hasSpecial']}>
            Must include at least one special character: @#!
          </ValidationItem>
          <ValidationItem id="space" isValid={rulePassword['hasNoSpace']}>
            Must not contain spaces
          </ValidationItem>
          <ValidationItem id="sameValues" isValid={ruleConfirm['sameValues']}>
            Passwords do not match
          </ValidationItem>
        </ValidationChecklist>
        <ButtonGroup className="mt-md" fullWidth>
          <Button label="Submit" fullWidth color="success" size="size-lg" />
        </ButtonGroup>
      </form>
    </div>
  );
};
