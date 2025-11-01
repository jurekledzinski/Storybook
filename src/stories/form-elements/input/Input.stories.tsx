import { Input } from './Input';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@src/app-ui';

const meta: Meta<typeof Input> = {
  title: 'Components/Form elements/Input',
  component: Input,
  args: {
    label: 'Name',
    variant: 'basic',
    type: 'text',
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
      control: 'select',
      options: ['size-xs', 'size-sm', 'size-md', 'size-lg'],
    },
    type: {
      control: 'select',
      options: ['email', 'number', 'password', 'text'],
      if: { arg: 'as', eq: 'input' },
    },
    variant: {
      control: 'select',
      options: ['basic', 'contained', 'outlined', 'underline'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Playground: Story = {
  render: (args) => (
    <Stack style={{ minWidth: '400px' }}>
      <Input {...args} />
    </Stack>
  ),
  parameters: {
    controls: {
      include: [
        'as',
        'cols',
        'disabled',
        'isError',
        'readOnly',
        'rows',
        'size',
        'type',
        'variant',
      ],
    },
  },
};

export const Default: Story = {
  render: (args) => (
    <Stack
      orientation="column"
      spacing="extra-loose"
      style={{ minWidth: '400px' }}
    >
      <Input {...args} variant="basic" />
      <Input {...args} variant="outlined" />
      <Input {...args} variant="contained" />
      <Input {...args} variant="underline" />
    </Stack>
  ),
  parameters: { controls: { disable: true } },
};
