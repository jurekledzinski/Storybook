import { Backdrop } from '@src/stories/overlays/backdrop';
import { Drawer } from './Drawer';
import { Meta, StoryObj } from '@storybook/react-vite';
import { storyClassNames } from './story';

const meta: Meta<typeof Drawer> = {
  args: {
    direction: 'top',
    open: true,
    children: <>Drawer content</>,
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

export const Playground: Story = {
  decorators: [
    (Story, context) => {
      const { args } = context;
      const classNames = storyClassNames(args);

      return (
        <div className={classNames.body}>
          <div className={classNames.header}>Header</div>
          <div className={classNames.container}>
            {args.direction !== 'right' && args.direction !== 'bottom' ? <Story /> : null}

            <div className={classNames.grid}>
              <div className={classNames.box}>
                <img src="images/Beach.jpg" alt="Beach" className={classNames.image} />
              </div>
              <div className={classNames.box}>
                <img src="images/Desert-view.jpg" alt="Desert-view" className={classNames.image} />
              </div>
              <div className={classNames.box}>
                <img src="images/Desert.jpg" alt="Desert" className={classNames.image} />
              </div>

              <div className={classNames.box}>
                <img src="images/Beach.jpg" alt="Beach" className={classNames.image} />
              </div>
              <div className={classNames.box}>
                <img src="images/Desert-view.jpg" alt="Desert-view" className={classNames.image} />
              </div>
              <div className={classNames.box}>
                <img src="images/Desert.jpg" alt="Desert" className={classNames.image} />
              </div>
            </div>

            <Backdrop open={Boolean(context.args.open)} />

            {args.direction !== 'left' && args.direction !== 'top' ? <Story /> : null}
          </div>
        </div>
      );
    },
  ],
};
