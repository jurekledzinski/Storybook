import { Eye, EyeSlash } from '@phosphor-icons/react';
import { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/Form elements/PasswordInput',
  component: PasswordInput,
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    label: 'Password',
    isPending: false,
    startIcon: <Eye size={16} weight="fill" />,
    endIcon: <EyeSlash size={16} weight="fill" />,
  },
  argTypes: {
    endIcon: {
      control: 'select',
      options: ['none', 'eyeSlash'],
      mapping: {
        none: undefined,
        eyeSlash: <EyeSlash size={16} weight="fill" />,
      },
    },
    startIcon: {
      control: 'select',
      options: ['none', 'eye'],
      mapping: {
        none: undefined,
        eye: <Eye size={16} weight="fill" />,
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['basic', 'contained', 'outlined', 'underline'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 'min(400px,100%)' }}>
        <Story />
      </div>
    ),
  ],
};
