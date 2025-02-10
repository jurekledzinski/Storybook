import { IconButton } from './IconButton';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'Components/Buttons/IconButton',
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {},
};
