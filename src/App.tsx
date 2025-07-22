import { Button } from './stories/buttons/button';
import { ButtonGroup } from './stories/buttons/button-group';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Field } from './stories/form-elements/field';
import { Message } from './stories/feedbacks/message';
import './stories/main.css';
import {
  Select,
  SelectList,
  SelectOption,
  SelectPanel,
  SelectTrigger,
} from './stories/form-elements/select';
import { checkIsError } from './examples';

const App = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<{ color: string; cars: string }>({
    defaultValues: {
      color: '',
      cars: '',
    },
  });

  const onSubmit: SubmitHandler<{ color: string }> = (data) => {
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
              <Select
                isError={checkIsError(
                  'color',
                  errors,
                  Boolean(dirtyFields.color)
                )}
                onChange={(id) => onChange(id)}
                {...rest}
              >
                <SelectTrigger endIcon={[faChevronUp, faChevronDown]} />
                <SelectPanel>
                  <SelectList>
                    <SelectOption id="red">Red</SelectOption>
                    <SelectOption id="green">Green</SelectOption>
                    <SelectOption id="orange">Orange</SelectOption>
                    <SelectOption id="blue">Blue</SelectOption>
                    <SelectOption id="yellow">Yellow</SelectOption>
                    <SelectOption id="purple">Purple</SelectOption>
                  </SelectList>
                </SelectPanel>
              </Select>
            )}
          />
          <Message variant="error">{errors.color?.message}</Message>
        </Field>

        <Field>
          <Controller
            name="cars"
            control={control}
            rules={{ required: { message: 'Cars is requird', value: true } }}
            render={({ field: { onChange, ...rest } }) => (
              <Select
                isError={checkIsError(
                  'cars',
                  errors,
                  Boolean(dirtyFields.cars)
                )}
                onChange={(id) => onChange(id)}
                {...rest}
              >
                <SelectTrigger endIcon={[faChevronUp, faChevronDown]} />
                <SelectPanel>
                  <SelectList>
                    <SelectOption id="polonez">Polonez</SelectOption>
                    <SelectOption id="fiat">Fiat</SelectOption>
                    <SelectOption id="syrenka">Syrenka</SelectOption>
                    <SelectOption id="warszawa">Warszawa</SelectOption>
                  </SelectList>
                </SelectPanel>
              </Select>
            )}
          />
          <Message variant="error">{errors.cars?.message}</Message>
        </Field>
        <ButtonGroup marginTop={16} fullWidth>
          <Button label="Submit" fullWidth color="success" size="size-lg" />
        </ButtonGroup>
      </form>
    </div>
  );
};

export default App;
