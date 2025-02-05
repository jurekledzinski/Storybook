import styles from './Drawer.module.css';
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

export const Top: Story = {
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false);
      return (
        <div className={styles.container}>
          <button onClick={() => setOpen((prev) => !prev)}>Show top</button>
          <Story args={{ open, direction: 'top' }} />
        </div>
      );
    },
  ],
};

export const Right: Story = {
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false);
      return (
        <div className={styles.container}>
          <button onClick={() => setOpen((prev) => !prev)}>Show right</button>
          <Story args={{ open, direction: 'right' }} />
        </div>
      );
    },
  ],
};
export const Bottom: Story = {
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false);
      return (
        <div className={styles.container}>
          <button onClick={() => setOpen((prev) => !prev)}>Show bottom</button>
          <Story args={{ open, direction: 'bottom' }} />
        </div>
      );
    },
  ],
};

export const Left: Story = {
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false);
      return (
        <div className={styles.container}>
          <button onClick={() => setOpen((prev) => !prev)}>Show left</button>
          <Story args={{ open, direction: 'left' }} />
        </div>
      );
    },
  ],
};
