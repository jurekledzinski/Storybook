import { Envelope, MagnifyingGlass, Sun, XCircle } from '@phosphor-icons/react';
import { fn } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/Form elements/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
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
    onClickEndIcon: fn(),
    onClickStartIcon: fn(),
    disabled: false,
    readOnly: false,
  },
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['input', 'textarea'],
    },
    endIcon: {
      control: 'select',
      options: ['none', 'magnifyingGlass', 'xCircle', 'sun'],
      mapping: {
        none: undefined,
        magnifyingGlass: <MagnifyingGlass weight="bold" />,
        xCircle: <XCircle weight="fill" />,
        sun: <Sun weight="fill" />,
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'extra-large'],
    },
    startIcon: {
      control: 'select',
      options: ['none', 'magnifyingGlass', 'envelope', 'sun'],
      mapping: {
        none: undefined,
        magnifyingGlass: <MagnifyingGlass weight="bold" />,
        envelope: <Envelope weight="regular" />,
        sun: <Sun weight="fill" />,
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
      if: { arg: 'as', eq: 'input' },
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
          gap: '1rem',
        }}
        noValidate
      >
        <Story />
        <Story />
        <Story />
        <Story />
      </form>
    ),
  ],
  parameters: {
    controls: {
      include: [
        'as',
        'disabled',
        'endIcon',
        'isError',
        'isPending',
        'label',
        'size',
        'startIcon',
        'readOnly',
        'type',
        'variant',
      ],
    },
  },
};
