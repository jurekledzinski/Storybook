import styles from './story/validationBlocksForm.module.css';
import { Button, ButtonGroup } from '@src/stories/buttons';
import { confirmRules, passwordRules, useValidationBlocksForm } from './story';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Field } from '../field';
import { Form } from '../form';
import { Label } from '../label';
import { Message } from '@src/stories/feedbacks';
import { Meta, StoryObj } from '@storybook/react-vite';
import { PasswordInput } from '../password-input';
import { useValidationMeter } from './hooks';
import { ValidationBlock } from './components';
import { ValidationBlocks } from './ValidationBlocks';

const meta: Meta<typeof ValidationBlocks> = {
  component: ValidationBlocks,
  title: 'Components/Form elements/ValidationBlocks',
  parameters: { controls: { disable: true } },
};
export default meta;

type Story = StoryObj<typeof ValidationBlocks>;

export const Playground: Story = {
  decorators: [
    () => {
      const { form, onSubmit } = useValidationBlocksForm();
      const { register, formState, watch } = form;
      const { errors } = formState;

      const { ruleResults } = useValidationMeter({
        formValues: watch(),
        mapRules: passwordRules,
        value: watch('password'),
      });

      return (
        <Form className={`${styles.form} g-sm`} onSubmit={onSubmit} noValidate>
          <Field>
            <Label>Password:</Label>
            <PasswordInput
              endIcon={[faEye, faEyeSlash]}
              {...register('password', {
                required: { message: 'Password is required', value: true },
                validate: passwordRules,
              })}
            />
            {errors.password && <Message color="negative">{errors.password?.message}</Message>}
          </Field>

          <Field>
            <Label>Confirm password:</Label>
            <PasswordInput
              endIcon={[faEye, faEyeSlash]}
              {...register('confirm', {
                required: { message: 'Confirm password is required', value: true },
                validate: confirmRules,
              })}
            />
            {errors.confirm && <Message color="negative">{errors.confirm?.message}</Message>}
          </Field>

          <ValidationBlocks>
            <ValidationBlock isValid={ruleResults.length >= 1} color="red" label="Weak" />
            <ValidationBlock isValid={ruleResults.length >= 2} color="orange" label="Medium" />
            <ValidationBlock isValid={ruleResults.length >= 4} color="yellow" label="Strong" />
            <ValidationBlock isValid={ruleResults.length >= 5} color="green" label="Very strong" />
          </ValidationBlocks>

          <ButtonGroup className="mt-md" fullWidth>
            <Button label="Submit" fullWidth color="success" size="size-lg" />
          </ButtonGroup>
        </Form>
      );
    },
  ],
};

export const Default: Story = {
  render: () => (
    <ValidationBlocks className={styles.wrapper}>
      <ValidationBlock isValid={true} color="red" label="Weak" />
      <ValidationBlock isValid={true} color="orange" label="Medium" />
      <ValidationBlock isValid={true} color="yellow" label="Strong" />
      <ValidationBlock isValid={true} color="green" label="Very strong" />
    </ValidationBlocks>
  ),
};
