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
    color: {
      control: 'select',
      options: ['info', 'negative', 'secondary', 'success', 'warning'],
    },
  },
};

export const Default: Story = {
  render: (args) => (
    <Stack orientation="column" spacing="normal">
      <Message {...args} color="error" />
      <Message {...args} color="info" />
      <Message {...args} color="secondary" />
      <Message {...args} color="success" />
      <Message {...args} color="warning" />
    </Stack>
  ),
  parameters: {
    controls: {
      include: [],
    },
  },
};
