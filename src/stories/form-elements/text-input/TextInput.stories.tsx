import { faEnvelope, faEnvelopesBulk, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@src/app-ui';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/Form elements/TextInput',
  component: TextInput,
  args: {
    variant: 'basic',
    size: 'size-sm',
    label: 'Name',
    isPending: false,
    type: 'text',
    isError: undefined,
    disabled: false,
    readOnly: false,
  },
  argTypes: {
    endIcon: {
      control: 'select',
      options: ['none', 'faMessage', 'faEnvelope', 'faEnvelopesBulk'],
      mapping: {
        none: undefined,
        faMessage,
        faEnvelope,
        faEnvelopesBulk,
      },
    },
    size: {
      control: 'select',
      options: ['size-xs', 'size-sm', 'size-md', 'size-lg'],
    },
    startIcon: {
      control: 'select',
      options: ['none', 'faMessage', 'faEnvelope', 'faEnvelopesBulk'],
      mapping: {
        none: undefined,
        faMessage,
        faEnvelope,
        faEnvelopesBulk,
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
      control: 'select',
      options: ['email', 'number', 'text'],
    },
    variant: {
      control: 'select',
      options: ['basic', 'contained', 'outlined', 'underline'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Playground: Story = {
  render: (args) => (
    <Stack style={{ minWidth: '400px' }}>
      <TextInput {...args} />
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
        'startIcon',
        'readOnly',
        'type',
        'variant',
      ],
    },
  },
};

export const Default: Story = {
  render: (args) => (
    <Stack style={{ minWidth: '400px' }}>
      <TextInput {...args} />
    </Stack>
  ),
  parameters: { controls: { disable: true } },
};
