import { Backdrop } from './Backdrop';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Backdrop> = {
  component: Backdrop,
  title: 'Components/Overlays/Backdrop',
};
export default meta;

type Story = StoryObj<typeof Backdrop>;

export const Default: Story = {
  args: {
    open: true,
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
};
