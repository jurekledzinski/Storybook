import { Box } from '@src/stories/layout';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
  component: Popover,
  title: 'Components/Overlays/Popover',
  args: {
    open: false,
    timeout: 300,
    unmountOnExit: true,
  },
};
export default meta;

type Story = StoryObj<typeof Popover>;

export const Playground: Story = {
  render: (args) => (
    <Popover {...args}>
      <Box className="p-md">Popover content</Box>
    </Popover>
  ),
  parameters: { controls: { include: ['open'] } },
};
