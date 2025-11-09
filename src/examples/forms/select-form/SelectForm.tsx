import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { InputsSelectForm } from './types';
import {
  Button,
  ButtonGroup,
  Field,
  Message,
  Select,
  SelectList,
  SelectOption,
  SelectTrigger,
} from '@src/stories';

export const SelectForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsSelectForm>({
    defaultValues: {
      color: '',
      cars: '',
    },
  });

  const onSubmit: SubmitHandler<InputsSelectForm> = (data) => {
    console.log('Submit', data);
  };

  return (
    <div style={{ width: 300, margin: '50px auto' }}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Field>
          <Controller
            name="color"
            control={control}
            rules={{ required: { message: 'Color is requird', value: true } }}
            render={({ field: { onChange, ...rest } }) => (
              <Select onChange={onChange} {...rest}>
                <SelectTrigger label="Colors" size="size-md" variant="basic" />
                <SelectList>
                  <SelectOption value="red">Red</SelectOption>
                  <SelectOption value="green">Green</SelectOption>
                  <SelectOption value="orange">Orange</SelectOption>
                  <SelectOption value="blue">Blue</SelectOption>
                  <SelectOption value="yellow">Yellow</SelectOption>
                  <SelectOption value="purple">Purple</SelectOption>
                </SelectList>
              </Select>
            )}
          />
          <Message color="negative">{errors.color?.message}</Message>
        </Field>

        <Field>
          <Controller
            name="cars"
            control={control}
            rules={{ required: { message: 'Cars is requird', value: true } }}
            render={({ field: { onChange, ...rest } }) => (
              <Select onChange={onChange} {...rest}>
                <SelectTrigger label="Colors" size="size-md" variant="basic" />
                <SelectList>
                  <SelectOption value="polonez">Polonez</SelectOption>
                  <SelectOption value="fiat">Fiat</SelectOption>
                  <SelectOption value="syrenka">Syrenka</SelectOption>
                  <SelectOption value="warszawa">Warszawa</SelectOption>
                </SelectList>
              </Select>
            )}
          />
          <Message color="negative">{errors.cars?.message}</Message>
        </Field>
        <ButtonGroup className="mt-md" fullWidth>
          <Button label="Submit" fullWidth color="success" size="size-lg" />
        </ButtonGroup>
      </form>
    </div>
  );
};

//   <Select
//     isError={checkIsError('color', errors, dirtyFields.color)}
//     onChange={(id) => onChange(id)}
//     {...rest}
//   >
//     <SelectTrigger endIcon={[faChevronUp, faChevronDown]} />
//     <SelectPanel>
//       <SelectList>
//         <SelectOption id="red">Red</SelectOption>
//         <SelectOption id="green">Green</SelectOption>
//         <SelectOption id="orange">Orange</SelectOption>
//         <SelectOption id="blue">Blue</SelectOption>
//         <SelectOption id="yellow">Yellow</SelectOption>
//         <SelectOption id="purple">Purple</SelectOption>
//       </SelectList>
//     </SelectPanel>
//   </Select>

//   <Select
//     isError={checkIsError('cars', errors, dirtyFields.cars)}
//     onChange={(id) => onChange(id)}
//     {...rest}
//   >
//     <SelectTrigger endIcon={[faChevronUp, faChevronDown]} />
//     <SelectPanel>
//       <SelectList>
//         <SelectOption id="polonez">Polonez</SelectOption>
//         <SelectOption id="fiat">Fiat</SelectOption>
//         <SelectOption id="syrenka">Syrenka</SelectOption>
//         <SelectOption id="warszawa">Warszawa</SelectOption>
//       </SelectList>
//     </SelectPanel>
//   </Select>
