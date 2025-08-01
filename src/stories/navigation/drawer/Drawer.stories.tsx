import styles from './Drawer.module.css';
import { Backdrop } from '@src/stories/overlays/backdrop';
import { Drawer } from './Drawer';
import { Meta, StoryObj } from '@storybook/react';

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
      const { args } = context;
      return (
        <div className={styles.body}>
          <div
            style={{ width: '100%', height: '100px', background: 'red' }}
          ></div>
          <div className={styles.container}>
            {args.direction !== 'right' && args.direction !== 'bottom' ? (
              <Story />
            ) : null}

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

            {args.direction !== 'left' && args.direction !== 'top' ? (
              <Story />
            ) : null}
          </div>
        </div>
      );
    },
  ],
};
