import styles from './TextInputForm.module.css';
import { Button } from '@src/stories/buttons/button';
import { ButtonGroup } from '@src/stories/buttons/button-group';
import { Controller, SubmitHandler } from 'react-hook-form';
import { Field } from '@src/stories/form-elements/field';
import { Form } from '@src/stories/form-elements/form';
import { formatNumber, removeNonNumericValues } from '../utils';
import { InputsTextInput, useControlTextForm } from './hooks';
import { Label } from '@src/stories/form-elements/label';
import { Message } from '@src/stories/feedbacks/message';
import { TextInput } from '@src/stories/form-elements/text-input';
import { useRef } from 'react';

const optionsFormat: Intl.NumberFormatOptions = {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
};

export const TextInputForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useControlTextForm();

  const type = useRef<'number' | 'text'>('number');

  const onSubmit: SubmitHandler<InputsTextInput> = (data) => {
    const format = removeNonNumericValues(data, ['price']);
    console.log('Submit', format);
  };

  return (
    <div className={styles.container}>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Field>
          <Label>Area</Label>
          <TextInput
            {...register('area', {
              required: { message: 'Area is required', value: true },
            })}
            type="number"
            endIcon={['m²']}
            min={0}
          />
          <Message variant="error">{errors.area?.message}</Message>
        </Field>
        <Field>
          <Label>Amount rooms</Label>
          <TextInput
            {...register('rooms', {
              required: { message: 'Amount of rooms is required', value: true },
            })}
            type="number"
            min={0}
            step={1}
          />
          <Message variant="error">{errors.rooms?.message}</Message>
        </Field>
        <Field>
          <Label>Year of construction</Label>
          <TextInput
            {...register('year', {
              required: {
                message: 'Year construction is required',
                value: true,
              },
            })}
            type="number"
            min={1800}
            max={new Date().getFullYear()}
          />
          <Message variant="error">{errors.year?.message}</Message>
        </Field>
        <Field>
          <Label>Price</Label>
          <Controller
            name="price"
            control={control}
            rules={{ required: { message: 'Price is requird', value: true } }}
            render={({ field: { ...rest } }) => (
              <TextInput
                {...rest}
                type={type.current}
                onFocus={(e) => {
                  type.current = 'number';
                  const value = e.target.value.replace(/[^\d]/g, '');
                  setValue('price', value);
                }}
                onBlur={(e) => {
                  type.current = 'text';
                  const value = e.target.value;
                  const format = formatNumber(value, 'nl-NL', optionsFormat);
                  setValue('price', format.format);
                }}
                min={0}
              />
            )}
          />
          <Message variant="error">{errors.price?.message}</Message>
        </Field>

        <ButtonGroup mt="mt-md" fullWidth>
          <Button label="Submit" fullWidth color="success" size="size-lg" />
        </ButtonGroup>
      </Form>
    </div>
  );
};
