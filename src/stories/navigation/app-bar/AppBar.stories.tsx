import { AppBar } from './AppBar';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof AppBar> = {
  args: {
    children: 'App bar',
  },
  component: AppBar,
  title: 'Components/Navigation/AppBar',
};

export default meta;

type Story = StoryObj<typeof AppBar>;

export const Default: Story = {
  render: (args) => <AppBar {...args} />,
};
