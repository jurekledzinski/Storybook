import { Box } from './Box';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Box> = {
  component: Box,
  title: 'Components/Layout/Box',
  args: {
    children: 'Box example',
  },
};
export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = { parameters: { controls: { disable: true } } };
