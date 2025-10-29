import {
  faCheckCircle,
  faExclamationCircle,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react-vite';
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
    as: 'input',
    variant: 'basic',
    size: 'size-sm',
    label: 'Name',
    isPending: false,
    type: 'text',
    isError: undefined,
    onClickEndIcon: fn(),
    onClickStartIcon: fn(),
    disabled: false,
    readOnly: false,
    placeholder: 'Hello placeholder',
  },
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['input', 'textarea'],
    },
    endIcon: {
      control: 'select',
      options: ['none', 'faCheckCircle', 'faExclamationCircle', 'faCheck'],
      mapping: {
        none: undefined,
        faCheckCircle: [faCheckCircle],
        faExclamationCircle: [faExclamationCircle],
        faCheck: [faCheck],
      },
    },
    size: {
      control: { type: 'select' },
      options: ['size-xs', 'size-sm', 'size-md', 'size-lg'],
    },
    startIcon: {
      control: 'select',
      options: ['none', 'faCheckCircle', 'faExclamationCircle', 'faCheck'],
      mapping: {
        none: undefined,
        faCheckCircle: [faCheckCircle],
        faExclamationCircle: [faExclamationCircle],
        faCheck: [faCheck],
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
      <div style={{ minWidth: '400px' }}>
        <Story />
      </div>
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
