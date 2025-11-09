import styles from './TextInputForm.module.css';
import { Button, ButtonGroup, Field, Form, Label, Message, TextInput } from '@src/stories';
import { Controller, SubmitHandler } from 'react-hook-form';
import { formatNumber, removeNonNumericValues } from '../utils';
import { InputsTextInput, useControlTextForm } from './hooks';
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
            endIcon="m²"
            min={0}
          />
          <Message color="negative">{errors.area?.message}</Message>
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
          <Message color="negative">{errors.rooms?.message}</Message>
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
          <Message color="negative">{errors.year?.message}</Message>
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
          <Message color="negative">{errors.price?.message}</Message>
        </Field>

        <ButtonGroup className="mt-md" fullWidth>
          <Button label="Submit" fullWidth color="success" size="size-lg" />
        </ButtonGroup>
      </Form>
    </div>
  );
};
