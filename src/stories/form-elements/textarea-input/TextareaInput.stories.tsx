import { faEnvelope, faEnvelopesBulk, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@src/app-ui';
import { TextareaInput } from './TextareaInput';

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
    rows: 10,
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
