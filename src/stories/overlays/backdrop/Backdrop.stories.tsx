import { Backdrop } from './Backdrop';
import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof Backdrop> = {
  component: Backdrop,
  title: 'Components/Overlays/Backdrop',
  args: {
    onClick: fn(),
  },
};
export default meta;

type Story = StoryObj<typeof Backdrop>;

export const Default: Story = {
  args: {
    open: true,
  },
  parameters: {
    controls: {
      include: ['open'],
    },
  },
};

export const State: Story = {
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false);
      return (
        <div>
          <button onClick={() => setOpen(true)}>Show backdrop</button>
          <Story args={{ onClick: () => setOpen(false), open }} />
        </div>
      );
    },
  ],
  parameters: {
    controls: {
      include: [],
    },
  },
};
