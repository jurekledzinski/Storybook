import styles from './Drawer.module.css';
import { Backdrop } from '../../overlays/backdrop/Backdrop';
import { Drawer } from './Drawer';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Drawer> = {
  args: {},
  component: Drawer,
  title: 'Components/Navigation/Drawer',
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    direction: 'top',
    open: false,
  },
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      mapping: {
        top: 'top',
        right: 'right',
        bottom: 'bottom',
        left: 'left',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className={styles.container}>
          <Story />
        </div>
      );
    },
  ],
};

export const DrawerBackdrop: Story = {
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false);
      return (
        <div className={styles.container}>
          <button onClick={() => setOpen((prev) => !prev)}>Show right</button>
          <Backdrop onClick={() => setOpen(false)} open={open} />
          <Story args={{ open, direction: 'right' }} />
        </div>
      );
    },
  ],
};

export const BackdropCloseOutside: Story = {
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false);
      return (
        <div className={styles.container}>
          <button onClick={() => setOpen(true)}>Show right</button>
          <Backdrop open={open} />
          <Story
            args={{
              open,
              direction: 'right',
              children: (
                <button
                  onClick={() => setOpen(false)}
                  style={{ display: 'flex', justifySelf: 'flex-end' }}
                >
                  Close
                </button>
              ),
            }}
          />
        </div>
      );
    },
  ],
};
