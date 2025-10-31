import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Field } from '../field';
import { Form, FormGroup } from '../form';
import { Meta, StoryObj } from '@storybook/react-vite';
import { PasswordInput } from './PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/Form elements/PasswordInput',
  component: PasswordInput,
  args: {
    label: 'Password',
    isError: undefined,
    isPending: false,
    startIcon: undefined,
    endIcon: [faEye, faEyeSlash],
    size: 'size-md',
    variant: 'basic',
    disabled: false,
    readOnly: false,
  },
  argTypes: {
    isError: {
      control: 'select',
      options: ['none', 'true', 'false'],
      mapping: {
        none: undefined,
        true: true,
        false: false,
      },
    },
    size: {
      control: 'select',
      options: ['size-xs', 'size-sm', 'size-md', 'size-lg'],
    },
    variant: {
      control: 'select',
      options: ['basic', 'contained', 'outlined', 'underline'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Playground: Story = {
  parameters: {
    controls: {
      exclude: ['endIcon', 'startIcon'],
    },
  },
};

export const Default: Story = {
  render: (args) => (
    <Form className="g-md" noValidate>
      <FormGroup>
        <Field>
          <PasswordInput {...args} />
        </Field>
      </FormGroup>
      <FormGroup>
        <Field>
          <PasswordInput {...args} variant="outlined" />
        </Field>
      </FormGroup>
      <FormGroup>
        <Field>
          <PasswordInput {...args} variant="contained" />
        </Field>
      </FormGroup>
      <FormGroup>
        <Field>
          <PasswordInput {...args} variant="underline" />
        </Field>
      </FormGroup>
    </Form>
  ),
  parameters: { controls: { disable: true } },
};
