import { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@src/app-ui';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Form elements/Textarea',
  component: Textarea,
  args: {
    label: 'Message',
    variant: 'basic',
    disabled: false,
    readOnly: false,
    rows: 10,
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
    variant: {
      control: 'select',
      options: ['basic', 'contained', 'outlined', 'underline'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Playground: Story = {
  render: (args) => (
    <Stack style={{ minWidth: '400px' }}>
      <Textarea {...args} />
    </Stack>
  ),
  parameters: {
    controls: {
      include: ['disabled', 'isError', 'readOnly', 'size', 'variant'],
    },
  },
};

export const Default: Story = {
  render: (args) => (
    <Stack orientation="column" spacing="extra-loose" style={{ minWidth: '400px' }}>
      <Textarea {...args} variant="basic" />
      <Textarea {...args} variant="outlined" />
      <Textarea {...args} variant="contained" />
      <Textarea {...args} variant="underline" />
    </Stack>
  ),
  parameters: { controls: { disable: true } },
};
