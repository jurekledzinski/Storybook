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
    isError: undefined,
    isPending: false,
    startIcon: <Eye weight="fill" />,
    endIcon: <EyeSlash weight="fill" />,
    size: 'small',
    variant: 'basic',
  },
  argTypes: {
    endIcon: {
      control: 'select',
      options: ['none', 'eyeSlash'],
      mapping: {
        none: undefined,
        eyeSlash: <EyeSlash weight="fill" />,
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
      options: ['none', 'eye'],
      mapping: {
        none: undefined,
        eye: <Eye weight="fill" />,
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'extra-large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['basic', 'contained', 'outlined', 'underline'],
    },
  },
  decorators: [
    (Story) => (
      <form style={{ width: 'min(400px,100%)' }} noValidate>
        <Story />
      </form>
    ),
  ],
  parameters: {
    controls: {
      include: [
        'endIcon',
        'isError',
        'isPending',
        'label',
        'size',
        'startIcon',
        'type',
        'variant',
      ],
    },
  },
};
