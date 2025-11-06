import { Backdrop } from './Backdrop';
import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Backdrop> = {
  component: Backdrop,
  title: 'Components/Overlays/Backdrop',
  args: {
    onClick: fn(),
    open: false,
    portal: false,
  },
  argTypes: {
    open: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Backdrop>;

export const Playground: Story = {
  render: (args) => <Backdrop {...args} />,
  parameters: {
    controls: {
      include: ['open'],
    },
  },
};

export const Default: Story = {
  args: {
    open: true,
  },
  parameters: { controls: { disable: true } },
};
