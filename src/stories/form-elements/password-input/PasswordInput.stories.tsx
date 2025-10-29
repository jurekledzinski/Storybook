import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Meta, StoryObj } from '@storybook/react-vite';
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
        'isError',
        'isPending',
        'label',
        'readOnly',
        'size',
        'type',
        'variant',
      ],
    },
  },
};
