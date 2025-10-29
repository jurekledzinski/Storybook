import exampleStyles from './Example.module.css';
import { Backdrop } from '@src/stories/overlays/backdrop';
import { Drawer } from './Drawer';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Drawer> = {
  args: {
    direction: 'top',
    open: true,
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
        <div className={exampleStyles.body}>
          <div className={exampleStyles.header}>Header</div>
          <div
            className={
              args.open
                ? `${exampleStyles.container} ${exampleStyles.open}`
                : exampleStyles.container
            }
          >
            {args.direction !== 'right' && args.direction !== 'bottom' ? (
              <Story />
            ) : null}

            <div className={exampleStyles.grid}>
              <div className={exampleStyles.box}>
                <img
                  src="images/Beach.jpg"
                  alt="Beach"
                  className={exampleStyles.image}
                />
              </div>
              <div className={exampleStyles.box}>
                <img
                  src="images/Desert-view.jpg"
                  alt="Desert-view"
                  className={exampleStyles.image}
                />
              </div>
              <div className={exampleStyles.box}>
                <img
                  src="images/Desert.jpg"
                  alt="Desert"
                  className={exampleStyles.image}
                />
              </div>

              <div className={exampleStyles.box}>
                <img
                  src="images/Beach.jpg"
                  alt="Beach"
                  className={exampleStyles.image}
                />
              </div>
              <div className={exampleStyles.box}>
                <img
                  src="images/Desert-view.jpg"
                  alt="Desert-view"
                  className={exampleStyles.image}
                />
              </div>
              <div className={exampleStyles.box}>
                <img
                  src="images/Desert.jpg"
                  alt="Desert"
                  className={exampleStyles.image}
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
