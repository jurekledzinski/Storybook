import { At, UserCircle, Sun } from '@phosphor-icons/react';
import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/Form elements/TextInput',
  component: TextInput,
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: 'Name',
    isPending: false,
    startIcon: '',
    endIcon: '',
    size: 'small',
    type: 'text',
    variant: 'basic',
    isError: undefined,
  },
  argTypes: {
    endIcon: {
      control: 'select',
      options: ['none', 'email', 'user', 'sun'],
      mapping: {
        none: undefined,
        email: <At size={16} weight="fill" />,
        user: <UserCircle size={16} weight="fill" />,
        sun: <Sun size={16} weight="fill" />,
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'extra-large'],
    },
    startIcon: {
      control: 'select',
      options: ['none', 'email', 'user', 'sun'],
      mapping: {
        none: undefined,
        email: <At size={16} weight="fill" />,
        user: <UserCircle size={16} weight="fill" />,
        sun: <Sun size={16} weight="fill" />,
      },
    },
    isError: {
      control: 'select',
      options: ['none', 'true', 'false'],
      mapping: {
        none: undefined,
        true: true,
        false: false,
      },
    },
    type: {
      control: { type: 'select' },
      options: ['email', 'number', 'text'],
    },
    variant: {
      control: { type: 'select' },
      options: ['basic', 'contained', 'outlined', 'underline'],
    },
  },
  decorators: [
    (Story) => (
      <form
        style={{
          width: 'min(400px,100%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
        noValidate
      >
        <Story />
      </form>
    ),
  ],
};
