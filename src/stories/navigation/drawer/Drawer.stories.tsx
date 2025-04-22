import styles from './Drawer.module.css';
import { Drawer } from './Drawer';
import { Meta, StoryObj } from '@storybook/react';
import { Backdrop } from '@src/stories/overlays/backdrop';

const meta: Meta<typeof Drawer> = {
  args: {
    direction: 'top',
    open: false,
    children: <>a</>,
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
    variant: {
      control: {
        type: 'select',
      },
      options: ['overlay', 'push', 'pinned'],
    },
  },
  component: Drawer,
  title: 'Components/Navigation/Drawer',
  parameters: {
    controls: {
      include: ['direction', 'open', 'variant'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  decorators: [
    (Story, context) => {
      return (
        <div className={styles.body}>
          <div className={styles.container}>
            <div className={styles.grid}>
              <div className={styles.box}>
                <img
                  src="images/Beach.jpg"
                  alt="Beach"
                  className={styles.image}
                />
              </div>
              <div className={styles.box}>
                <img
                  src="images/Desert-view.jpg"
                  alt="Desert-view"
                  className={styles.image}
                />
              </div>
              <div className={styles.box}>
                <img
                  src="images/Desert.jpg"
                  alt="Desert"
                  className={styles.image}
                />
              </div>

              <div className={styles.box}>
                <img
                  src="images/Beach.jpg"
                  alt="Beach"
                  className={styles.image}
                />
              </div>
              <div className={styles.box}>
                <img
                  src="images/Desert-view.jpg"
                  alt="Desert-view"
                  className={styles.image}
                />
              </div>
              <div className={styles.box}>
                <img
                  src="images/Desert.jpg"
                  alt="Desert"
                  className={styles.image}
                />
              </div>
            </div>
            <Backdrop open={Boolean(context.args.open)} />
            <Story />
          </div>
        </div>
      );
    },
  ],
};
