import { Meta, StoryObj } from '@storybook/react-vite';
import { PopOver } from './PopOver';
import { Box } from '@src/stories/layout';

const meta: Meta<typeof PopOver> = {
  component: PopOver,
  title: 'Components/Overlays/PopOver',
  args: {
    open: false,
    timeout: 300,
    unmountOnExit: true,
  },
};
export default meta;

type Story = StoryObj<typeof PopOver>;

export const Playground: Story = {
  render: (args) => (
    <PopOver {...args}>
      <Box className="p-md">Popover content</Box>
    </PopOver>
  ),
  parameters: { controls: { include: ['open'] } },
};
