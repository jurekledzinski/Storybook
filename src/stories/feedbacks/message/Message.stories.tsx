import { Message } from './Message';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@src/app-ui';

const meta: Meta<typeof Message> = {
  component: Message,
  title: 'Components/Feedbacks/Message',
  args: { children: 'Message example' },
};

export default meta;

type Story = StoryObj<typeof Message>;

export const Playground: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['error', 'info', 'secondary', 'success', 'warning'],
    },
  },
};

export const Default: Story = {
  render: (args) => (
    <Stack orientation="column" spacing="normal">
      <Message {...args} variant="error" />
      <Message {...args} variant="info" />
      <Message {...args} variant="secondary" />
      <Message {...args} variant="success" />
      <Message {...args} variant="warning" />
    </Stack>
  ),
  parameters: {
    controls: {
      include: [],
    },
  },
};
