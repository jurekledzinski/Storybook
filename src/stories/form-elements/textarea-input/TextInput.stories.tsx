import { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@src/app-ui';
import { TextareaInput } from './TextareaInput';
import {
  faCheckCircle,
  faExclamationCircle,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof TextareaInput> = {
  title: 'Components/Form elements/TextareaInput',
  component: TextareaInput,
  args: {
    variant: 'basic',
    size: 'size-sm',
    label: 'Name',
    isPending: false,
    isError: undefined,
    disabled: false,
    readOnly: false,
  },
  argTypes: {
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
      control: 'select',
      options: ['size-xs', 'size-sm', 'size-md', 'size-lg'],
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
    variant: {
      control: 'select',
      options: ['basic', 'contained', 'outlined', 'underline'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextareaInput>;

export const Playground: Story = {
  render: (args) => (
    <Stack style={{ minWidth: '400px' }}>
      <TextareaInput {...args} />
    </Stack>
  ),
  parameters: {
    controls: {
      include: [
        'disabled',
        'endIcon',
        'isError',
        'isPending',
        'label',
        'size',
        'readOnly',
        'variant',
      ],
    },
  },
};

export const Default: Story = {
  render: (args) => (
    <Stack style={{ minWidth: '400px' }}>
      <TextareaInput {...args} />
    </Stack>
  ),
  parameters: { controls: { disable: true } },
};
