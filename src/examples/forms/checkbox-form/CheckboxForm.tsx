import styles from './Checkbox.module.css';
import { InputsCheckboxForm } from './types';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  Field,
  Form,
  Label,
  Message,
  Radio,
  RadioGroup,
} from '@src/stories';

export const CheckBoxForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsCheckboxForm>({
    defaultValues: {
      color: '',
      season: [],
    },
  });

  const onSubmit: SubmitHandler<InputsCheckboxForm> = (data) => {
    console.log('Submit', data);
  };

  return (
    <div className={styles.container}>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Field>
          <Label>Color:</Label>

          <RadioGroup orientation="column" spacing="normal">
            <Radio
              id="czerwony"
              value="czerwony"
              color={'primary'}
              size={'size-xs'}
              variant={'filled'}
              {...register('color', {
                required: { message: 'Color is required', value: true },
              })}
            >
              Czerwony
            </Radio>
            <Radio
              id="zielony"
              value="zielony"
              color={'primary'}
              size={'size-xs'}
              variant={'filled'}
              {...register('color', {
                required: { message: 'Color is required', value: true },
              })}
            >
              Zielony
            </Radio>
            <Radio
              id="żółty"
              value="żółty"
              color={'primary'}
              size={'size-xs'}
              variant={'filled'}
              {...register('color', {
                required: { message: 'Color is required', value: true },
              })}
            >
              Żółty
            </Radio>
          </RadioGroup>
          <Message color="negative">{errors.color?.message}</Message>
        </Field>

        <Field>
          <Label>Season:</Label>
          <CheckboxGroup orientation="column" spacing="tight">
            <Checkbox
              {...register('season', {
                required: { message: 'Season is required', value: true },
              })}
              id="wiosna"
              value="wiosna"
              size="size-xs"
            >
              Wiosna
            </Checkbox>

            <Checkbox
              {...register('season', {
                required: { message: 'Season is required', value: true },
              })}
              id="lato"
              value="lato"
              size="size-xs"
            >
              Lato
            </Checkbox>

            <Checkbox
              {...register('season', {
                required: { message: 'Season is required', value: true },
              })}
              id="jesień"
              value="Jesień"
              size="size-xs"
            >
              Jesień
            </Checkbox>
            <Checkbox
              {...register('season', {
                required: { message: 'Season is required', value: true },
              })}
              id="zima"
              value="zima"
              size="size-xs"
            >
              Zima
            </Checkbox>
          </CheckboxGroup>
          <Message color="negative">{errors.season?.message}</Message>
        </Field>

        <ButtonGroup className="mt-md" fullWidth>
          <Button label="Submit" fullWidth color="success" size="size-lg" />
        </ButtonGroup>
      </Form>
    </div>
  );
};
