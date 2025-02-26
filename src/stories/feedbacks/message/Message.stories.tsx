import { Message } from './Message';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Message> = {
  component: Message,
  title: 'Components/Feedbacks/Message',
  args: {},
};

export default meta;

type Story = StoryObj<typeof Message>;

export const Default: Story = {
  args: {
    children: 'Example message',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['error', 'info', 'secondary', 'success', 'warning'],
    },
  },
};
