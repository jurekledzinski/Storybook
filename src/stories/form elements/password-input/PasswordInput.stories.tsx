import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/Form elements/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    label: 'Password',
    isError: undefined,
    isPending: false,
    startIcon: faEye,
    endIcon: faEyeSlash,
    size: 'size-md',
    variant: 'basic',
    disabled: false,
    readOnly: false,
  },
  argTypes: {
    endIcon: {
      control: 'select',
      options: ['none', 'faEyeSlash'],
      mapping: {
        none: undefined,
        faEyeSlash: faEyeSlash,
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
    startIcon: {
      control: 'select',
      options: ['none', 'faEye'],
      mapping: {
        none: undefined,
        faEye: faEye,
      },
    },
    size: {
      control: { type: 'select' },
      options: ['size-xs', 'size-sm', 'size-md', 'size-lg'],
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
          width: '400px',
          height: 400,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <Story />
        <Story />
      </form>
    ),
  ],
  parameters: {
    controls: {
      include: [
        'disabled',
        'endIcon',
        'isError',
        'isPending',
        'label',
        'readOnly',
        'size',
        'startIcon',
        'type',
        'variant',
      ],
    },
  },
};
